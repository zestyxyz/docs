# ZestyMarket_ERC20\_V2

## Introduction

The logic of ZestyMarket V2 is similar to the V1 contract. The key difference is in Phase 2: Contract. V2 contracts use Shamir's Secret Sharing as a way of validating advertising delivery. The validator system will a Proof of Authority network initially, and we'll relax constraints on the trustworthiness of validators. In addition to the validation system,  ZestyMarket V2 would incorporate a tax for validators and the Zesty DAO. It introduces token incentive mechanisms to reward usage of the contract. A future version of the contract will look into decentralizing the validation system. The process is as such.

**Phase 2: Contract**

1. Once the contract starts, a validator node would act as dealer and set the hashlock (hash of the secret) for the particular contract and declare the total number of shares of the secret to be distributed. The shares would then be distributed to random validators within the validator network. The minimum threshold to uncover the original secret is 75% of secret shares.  
2. Validator nodes would randomly check whether the advertisement is delivered on the location which the seller has defined. The location would be described in the URI section of the NFT, this could be a URI or machine readable instructions to access a location within a game world.   If the validator notes that the advertisement slot has be delivered, the validator would then publish the secret share on the smart contract. Otherwise, the secret share would be deleted. 
3. If at least 75% of the secret shares are known, the seller can reconstruct the original secret to unlock the hashlock which would unlock funds in the contract. Otherwise, after the contract expires (+ an additional 2 days grace period for seller to withdraw funds), the buyer would be refunded, as the advertisement has not been delivered in a satisfactory manner.

## Specifications

### Constructor

The constructor like V1 requires the a transaction token address (any ERC20 compatible token) and a zestyNFT address to be deployed.

It adds on rewardsTokenAddress which is the reward token given out to successful transactions on the contract.

Adds on a validator address and the a reward distributor address. The code for the reward distributor can be found under Governance > RewardDistributor.

The remaining rate function are the reward tokens given out in a transaction per transaction token to buyers, sellers, validators, and to be locked in the NFTs. Note that rewards are subject to availability, rewards might not be given out if there are no reward tokens held by the contract.

```
constructor(
    address txTokenAddress_,
    address zestyNFTAddress_,
    address rewardsTokenAddress_,
    address zestyDAO_,
    address validator_,
    address rewardsDistributor_,
    uint256 rewardsRateBuyer_,
    uint256 rewardsRateSeller_,
    uint256 rewardsRateValidator_,
    uint256 rewardsRateNFT_
)
```

### Getter Functions

#### getTxTokenAddress

Returns the transaction token address

```
function getTxTokenAddress() external view returns (address)
```

#### getRewardsTokenAddress

Returns the reward token address

```
function getRewardsTokenAddress() external view returns (address)
```

#### getValidator

Returns the validator address

```
function getValidator() external view returns (address)
```

#### getRewardsBalance

Returns the reward token balance on the contract

```
function getRewardsBalance() external view returns (uint256)
```

#### getRewardsRate

Returns the reward rate for the buyer, seller, nft, and validator.

```
function getRewardsRate() 
    external 
    view 
    returns (
        uint256 rewardsRateBuyer,
        uint256 rewardsRateSeller,
        uint256 rewardsRateNFT,
        uint256 rewardsRateValidator
    )
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

$$V(T_i)$$refers to the current NFT price in some ERC20 tokens

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

Returns a buyer campaign. `buyer` refers to the buyer's address. `uri` refers to the campaign uri set by the buyer. This uri field would follow the [ERC1155 json specifications](https://eips.ethereum.org/EIPS/eip-1155).

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

Returns the state of the contract. `sellerAuctionId` refers to the related sellerAuction, `buyerCampaignId` refers to the related buyerCampaign, `contractTimeStart` and `contractTimeEnd` refers to the ending and starting time of the contract in unix seconds. `contractValue` refers to the value of the contract. `withdrawn` and `refunded` is a uint8 representing a boolean, where (1 is False and 2 is True). `shares` refers to the Shamir's secret shares that are published on the contract and `totalShares` refers to the total shares that are announced by the dealer validator node.

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
        uint8 withdrawn,
        uint8 refunded,
        string[] memory shares,
        uint32 totalShares
    )
```

### State Changing Functions

#### setValidator

Sets the validator address. This can only be done by the owner of the contract which would be the Zesty DAO address.

```
function setValidator(address validator_) external onlyOwner
```

#### setCuts

Sets the tax that would be given to the validator and the Zesty DAO

```
function setCuts(uint32 validatorCut_, uint32 zestyCut_) external onlyOwner
```

#### setRewardsRate

Set the reward rate for buyer, seller, nft, and validator. The rate is given by the amount of reward token per transaction token.

```
function setRewardsRate(
    uint256 rewardsRateBuyer_,
    uint256 rewardsRateSeller_,
    uint256 rewardsRateNFT_,
    uint256 rewardsRateValidator_
) 
    external 
    onlyOwner
```

#### buyerCampaignCreate

Allows a buyer to create a campaign. Note that buyer campaign is append only, it can only be created and not deleted or edited. The uri field of the buyer campaign should point to a IPFS hash to ensure content integrity. This ensures that a seller of an advertising space would approve content that cannot be changed.

```
function buyerCampaignCreate(string memory _uri) external
```

#### sellerNFTDeposit

Allows a seller to deposit a NFT and set auto approval settings. Note that auto approval is a uint8 that acts as a boolean where 1 is False and 2 is True. The function uses the nonReentrant modifier.

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

Allows a seller to update the autoApprove setting on the NFT. This function can be executed by the address that deposited the NFT or an appointed operator.

```
function sellerNFTUpdate(
    uint256 _tokenId,
    uint8 _autoApprove
) 
    external
    onlyDepositorOrOperator(_tokenId)
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

Allows to cancel an auction if it has no bids.

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

Some of the deposit would be taxed and given to the validators and DAO address. This is meant to prevent malicious bidding. Eg. repeatedly putting NSFW campaigns on a non-NSFW seller auction.

```
function sellerAuctionRejectBatch(uint256[] memory _sellerAuctionId) external nonReentrant
```

#### contractSetHashlockBatch

Allows the validator to set a hashlock and declare the total shares on new contracts.

```
function contractSetHashlockBatch(
    uint256[] memory _contractId, 
    bytes32[] memory _hashlock, 
    uint32[] memory _totalShares
) external
```

#### contractSetShare

Allows the validator to declare a share of the secret when it has checked that an advertising slot has been delivered at some random time between the contract start time and end time.

```
function contractSetShare(uint256 _contractId, string memory _share) external
```

#### contractWithdrawBatch

Allows the seller to withdraw funds when the contract is over and if the secret to the hashlock is known. The withdrawal is only possible when the contract has a valid auction and valid buy campaign. If available, reward tokens will be given out to the buyer, seller, validator, to the NFT. A cut of the value would be transferred to validators and the zesty DAO.

```
function contractWithdrawBatch(uint256[] memory _contractId, bytes32[] memory _preimage) external nonReentrant
```

#### contractRefundBatch

Allows a buyer to be refunded after the end of the contract + some gracePeriod (default 2 days). The grace period exists to give time to the seller to claim funds if the advertising slot was delivered successfully. If the seller has not claimed the funds, it means that the seller did not obtain the secret or does not want to claim the funds for some reason. In that case, the buyer would be able to retrieved locked funds.

```
function contractRefundBatch(uint256[] memory _contractId) external nonReentrant
```

#### notifyRewardAmount

Updates the reward balance of the contract when the RewardDistributor contract distributes rewards.

```
function notifyRewardAmount(uint256 reward) external override onlyRewardsDistributor
```
