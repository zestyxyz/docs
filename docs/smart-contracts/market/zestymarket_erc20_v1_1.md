---
description: ZestyMarket V1.1 with no validation
---

# ZestyMarket\_ERC20\_V1\_1

## Introduction&#x20;

Zesty Market V1 follows the following flow.&#x20;

**Phase 0: Setup**

1. &#x20;Buyers would create campaigns for their advertising slots. These campaigns cannot be edited and can only be created. The campaigns cannot be edited so as to ensure that a malicious buyer would not be able to change the uri (which is an ipfs hash) once a seller has agreed to advertise the campaign.&#x20;
2. Sellers would deposit ZestyNFTs and set whether they would require approvals. After depositing the ZestyNFT, sellers would be able to create auctions.&#x20;

**Phase 1: Auction**

1. When the auctions are created buyers can bid on the auctions. The auctions are Dutch Auctions with a linearly decaying price. If the seller enabled auto approvals it would proceed directly to Phase 2: Contract section.
2. If auto approvals are disabled the seller would need to either approve or reject the ad slot. If the ad slot is approved Phase 2: Contact section would proceed, otherwise, the auction continues.

**Phase 2: Contract**

1. Zesty Market **** V1 contract only allows withdrawals. When the contract is over, the seller will be able to withdraw locked funds in the contract.

## Specifications

### Constructor

The constructor requires the a transaction token address (any ERC20 compatible token) and a zestyNFT address to be deployed.

```
constructor(
    address txTokenAddress_,
    address zestyNFTAddress_
) 
```

### Getter Functions

#### getTxTokenAddress

Returns the transaction token address

```
function getTxTokenAddress() external view returns (address)
```

#### getSellerNFTSetting

Returns the deposited NFT settings which was deposited by the seller. Returns `tokenId` the id of the token, `seller` the address of the seller, `autoApprove` a uint8 value where 1 is False and 2 is True, `inProgressCount` an variable which increments and decrements depending on the number of auctions or contracts in progress or are completed. This prevents a seller from withdrawing a NFT when it is already on the market otherwise, the metadata of the NFT could be changed.

```
function getSellerNFTSetting(uint256 _tokenId) 
    external 
    view
    returns (
        uint256 tokenId,
        address seller,
        uint8 autoApprove,
        uint256 inProgressCount
    ) 
```

#### getSellerAuctionPrice

Returns the current auction price of the auction. The price is a linearly decreasing function which follows the following equation:

$$V(T_{i}) = V(T_{0}) - (T_{i} - T_{0}) \times \frac{V(T_{0})}{T_{n} - T_{0}}$$

**Definitions**

&#x20;$$V(T_i)$$refers to the current NFT price in some ERC20 tokens

$$V(T_{0})$$refers to the starting price of the NFT in some ERC20 tokens

$$T_i$$refers to the current time in Unix time

$$T_0$$refers to the starting time of the Dutch auction in Unix time

$$T_n$$refers to the expiration time of the NFT timeslot in Unix time

```
function getSellerAuctionPrice(uint256 _sellerAuctionId) public view returns (uint256)
```

#### getSellerAuction

Returns the current auction state. `seller` refers to the seller's address, `tokenId` refers to the ZestyNFT token id that would be auctioned out. `auctionTimeStart` and `auctionTimeEnd` refers to the start and end time of the auction. `contractTimeStart` and `contractTimeEnd` refers to the start and ending time of the contract and advertising delivery. `priceStart` refers to the starting price of the Dutch auction. `pricePending` refers to the pending price of the Dutch auction upon a bid by a buyer. `priceEnd` refers to the ending price after the buyer has approved the buyerCampaign. `buyerCampaign` refers to the id of the buyer's campaign. `buyerCampaignApproved` is a uint8 representing a boolean (where 1 is False, and 2 is True), if approved, the auction proceeds to the contract section.

```
function getSellerAuction(uint256 _sellerAuctionId) 
    external 
    view 
    returns (
        address seller,
        uint256 tokenId,
        uint256 auctionTimeStart,
        uint256 auctionTimeEnd,
        uint256 contractTimeStart,
        uint256 contractTimeEnd,
        uint256 priceStart,
        uint256 pricePending,
        uint256 priceEnd,
        uint256 buyerCampaign,
        uint8 buyerCampaignApproved
    )
```

#### getBuyerCampaign

Returns a buyer campaign. `buyer` refers to the buyer's address. `uri` refers to the campaign uri set by the buyer. This uri field would follow the [ERC1155 json specifications](https://eips.ethereum.org/EIPS/eip-1155).&#x20;

```
function getBuyerCampaign(uint256 _buyerCampaignId)
    external
    view
    returns (
        address buyer,
        string memory uri
    )
```

#### getContract

Returns the state of the contract. `sellerAuctionId` refers to the related sellerAuction, `buyerCampaignId` refers to the related buyerCampaign, `contractTimeStart` and `contractTimeEnd` refers to the ending and starting time of the contract in unix seconds. `contractValue` refers to the value of the contract. `withdrawn` is a uint8 representing a boolean, where (1 is False and 2 is True).

```
function getContract(uint256 _contractId)
    external
    view
    returns (
        uint256 sellerAuctionId,
        uint256 buyerCampaignId,
        uint256 contractTimeStart,
        uint256 contractTimeEnd,
        uint256 contractValue,
    )
```

### State Changing Functions

#### buyerCampaignCreate

Allows a buyer to create a campaign. Note that buyer campaign is append only, it can only be created and not deleted or edited. The uri field of the buyer campaign should point to a IPFS hash to ensure content integrity. This ensures that a seller of an advertising space would approve content that cannot be changed.&#x20;

```
function buyerCampaignCreate(string memory _uri) external
```

#### sellerNFTDeposit

Allows a seller to deposit a NFT and set auto approval settings. Note that auto approval is a uint8 that acts as a boolean where 1 is False and 2 is True. The function uses the nonReentrant modifier.&#x20;

```
function sellerNFTDeposit(
    uint256 _tokenId,
    uint8 _autoApprove
) 
    external 
    nonReentrant
```

#### sellerNFTWithdraw

Allows a seller to withdraw an NFT when there are no auctions and contracts in progress. Only the address that deposited the NFT would be able to withdraw the NFT. The function uses the nonReentrant modifier.

```
function sellerNFTWithdraw(uint256 _tokenId) external onlyDepositor(_tokenId) nonReentrant
```

#### sellerNFTUpdate

Allows a seller to update the autoApprove setting on the NFT. This function can be executed by the address that deposited the NFT or an appointed operator.&#x20;

```
function sellerNFTUpdate(
    uint256 _tokenId,
    uint8 _autoApprove
) 
    external
    onlyDepositorOrOperator(_tokenId)
```

#### sellerBan

Allows a seller to ban a malicious buyer to prevent a buyer from bidding. Note that, it is easy to create a new address again if the buyer is malicious. Eg. repeatedly posting NSFW campaigns on a seller who does not accept NSFW campaigns. This is a temporary fix. V2 removes the ban functionality in favor of a tax upon rejection. This would make it expensive to be malicious on Zesty Market.

```
function sellerBan(address _addr) external
```

#### sellerUnban

Allows a seller to unban a buyer.

```
function sellerUnban(address _addr) external 
```

#### sellerAuctionCreateBatch

Allows a seller to create auctions for a given NFT that is deposited by the seller. This function can be called by the seller or an operator for the seller. The seller would need to specify the start and end time for the auctions, start and end time for the contract, and the starting prices of each auctions.

```
function sellerAuctionCreateBatch(
    uint256 _tokenId,
    uint256[] memory _auctionTimeStart,
    uint256[] memory _auctionTimeEnd,
    uint256[] memory _contractTimeStart,
    uint256[] memory _contractTimeEnd,
    uint256[] memory _priceStart
) 
    external 
    onlyDepositorOrOperator(_tokenId)
```

#### sellerAuctionCancelBatch

Allows a seller to cancel an auction if it has no bids.&#x20;

```
function sellerAuctionCancelBatch(uint256[] memory _sellerAuctionId) external
```

#### sellerAuctionBidBatch

Allows a buyer or operator for buyer to bid on an auction if the buyer is not banned. The buyer would need to specify the buyer campaign that would be used. If the auction is expired or the price has decayed to 0, bids would not be allowed. A seller should not be able to bid on their own auctions. Upon bidding, an initial deposit of transaction token would be transferred to the contract to be held in escrow. This is denoted by `pricePending` in the auction state.

```
function sellerAuctionBidBatch(uint256[] memory _sellerAuctionId, uint256 _buyerCampaignId) external nonReentrant
```

#### sellerAuctionBidCancelBatch

Allows a buyer or operator for buyer to cancel a bid if the seller has not approved. This is to allow a buyer to retrieve the deposit if the seller does not approve. Returns to the buyer `pricePending` amount in the auction state.

```
function sellerAuctionBidCancelBatch(uint256[] memory _sellerAuctionId) external nonReentrant 
```

#### sellerAuctionApproveBatch

Allows the seller or operator to approve auctions if they are not already approved. Returns funds to the buyer if the ad slot is not immediately approved. The returned funds is the difference between the pending price and the current price of the auction. Prevents approval when price reaches 0. The buyer would need to call sellerAuctionBidCancelBatch to retrieve funds in this scenario. Alternatively, the seller would need to call sellerAuctionRejectBatch.

```
function sellerAuctionApproveBatch(uint256[] memory _sellerAuctionId) external nonReentrant
```

#### sellerAuctionRejectBatch

Allows the seller to reject a buyer's bid. Returns the buyer's initial deposit denoted `pricePending`

```
function sellerAuctionRejectBatch(uint256[] memory _sellerAuctionId) external nonReentrant
```

#### contractWithdrawBatch

Allows the seller to withdraw funds when the contract is over. The withdrawal is only possible when the contract has a valid auction and valid buy campaign.

```
function contractWithdrawBatch(uint256[] memory _contractId) external nonReentrant
```
