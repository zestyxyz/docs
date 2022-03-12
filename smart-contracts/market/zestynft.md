# ZestyNFT

## Introduction

ZestyNFT is used by sellers of advertising space to define and financialize a digital space. A ZestyNFT is able to accumulate ZestyTokens which can be retrieved upon burning the ZestyNFT. This helps to set a floor price for ZestyNFTs.

ZestyNFT follows the ERC721 specification adding it on with the ERC721Metadata, ERC721Enumerable extensions. Information on the ERC721 specification can be found on [EIP-721](https://eips.ethereum.org/EIPS/eip-721). Additional state changing functions are `mint`, `burn`, `setTokenURI`, `lockZestyToken`. The specifications described below are the functionality that were added.

ZestyNFT's URIs, like other URIs on Zesty Market, will be an IPFS hash. The files can be hosted on IPFS using an IPFS provider, Filecoin, or Arweave.

## Specifications

### Constructor

ZestyNFT is an Ownable contract. The owner of the ZestyNFT will be set to the deployer initially. The only control the owner has over the ZestyNFT contract is setting the ZestyToken address when ZestyToken is deployed. The zestyTokenAddress will be set to the 0 address initially.

```
constructor(address owner_, address zestyTokenAddress_) 
    Ownable(owner_)
    ERC721("Zesty Market NFT", "ZESTYNFT")
```

### Getter Functions

#### getTokenData

Returns the creator, time created, amount of locked zesty tokens, and the uri of the token data.

```
function getTokenData(uint256 tokenId) 
    public
    view 
    returns (
        address creator,
        uint256 timeCreated,
        uint256 zestyTokenValue,
        string memory uri
    )
```

#### getZestyTokenAddress

Returns the address of ZestyToken. This can be the 0 address if ZestyToken has yet to be deployed. If the address is 0, ZestyNFT will not allow the locking of ZestyTokens and retrieval of ZestyTokens.

```
function getZestyTokenAddress() public view returns (address)
```

### State Changing Functions

#### setZestyTokenAddress

Sets the address of ZestyToken. Only the owner of the contract can set the ZestyToken address. After setting the ZestyToken address, the address should not be changed anymore so that there would not be any balance accounting issues with ZestyTokens stored on the contract. The owner of the contract will voluntarily renounce ownership of the contract when ZestyToken address has been set. Renouncing ownership is not done programmatically through the contract.

```
function setZestyTokenAddress(address zestyTokenAddress_) public onlyOwner {
```

#### mint

Mints a ZestyNFT. The creator of the NFT can set the URI of the ZestyNFT. The URI should be an IPFS hash and should point to a json file which contains other data. The format of the json file would follow the [ERC1155 metadata specification](https://eips.ethereum.org/EIPS/eip-1155) with the omission of a decimals field as this is an ERC721 token.

The URI can be modified by the creator of the NFT when the NFT is owned by the creator. The URI cannot be modified once the NFT leaves the creator's address.

```
function mint(string memory _uri) public
```

#### lockZestyToken

Locks ZestyToken in the contract. Locking of ZestyToken is prohibited if the ZestyToken address has yet to be set. Otherwise, locking ZestyTokens will transfer ZestyTokens from an account or contract to the ZestyNFT contract and increment the balance of ZestyTokens in the ZestyNFT. The nonReentrant modifier is introduced to prevent any form of reentrancy.

```
function lockZestyToken(uint256 _tokenId, uint256 _value) public nonReentrant
```

#### burn

Burns a ZestyNFT and transfers locked ZestyTokens to the caller of the function. The caller may be an approved address or the owner of the ZestyNFT. Users should ensure that they do not approve unsafe addresses to manage their ZestyNFT.

```
function burn(uint256 _tokenId) public nonReentrant
```

**setTokenURI**

Allows the creator to modify the URI when the NFT is in the creator's possession

```
function setTokenURI(uint256 _tokenId, string memory _uri) public
```
