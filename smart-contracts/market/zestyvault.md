# ZestyVault

## Introduction

Zesty Vault is an abstract contract which specifies how Zesty NFTs would be deposited and withdrawn. It allows the assignment of operators to any address to act on behalf of the address.

## Specifications

### Constructor

Specify the zestyNFT address to be used

```
constructor(address zestyNFTAddress_)
```

### Getter Functions

#### getZestyNFTAddress

Returns the zesty NFT address

```
function getZestyNFTAddress() public virtual view returns (address) {
```

#### getDepositor

Returns the depositor for a given token id

```
function getDepositor(uint256 _tokenId) public virtual view returns (address)
```

#### isDepositor

Returns a bool whether the `msg.sender` is the depositor for a given token id

```
function isDepositor(uint256 _tokenId) public virtual view returns (bool)
```

#### getOperator

Returns the operator address for a given depositor address. Note that since the operator is an address to address mapping. The operator does not need to operate only on depositors. Any address would suffice.

```
function getOperator(address _depositor) public virtual view returns (address)
```

#### isOperator

Returns a bool whether a given address is an operator for a depositor

```
function isOperator(address _depositor, address _operator) public virtual view returns (bool)
```

#### onERC721Received

ERC721 function to allow receipt of ERC721

```
function onERC721Received(address, address, uint256, bytes memory) public virtual override returns (bytes4)
```

### State Changing Functions

#### authorizeOperator

Authorizes an operator for `msg.sender`

```
function authorizeOperator(address _operator) public virtual
```

#### revokeOperator

Revokes an operator for `msg.sender`

```
function revokeOperator(address _operator) public virtual
```

#### \_depositZestyNFT

An internal function that is to be used by inherited contracts that allow for the deposit of NFTs.

```
function _depositZestyNFT(uint256 _tokenId) internal virtual
```

#### \_withdrawZestyNFT

An internal function that is to be used by inherited contracts that allow for the withdrawal of NFTs.

```
function _withdrawZestyNFT(uint256 _tokenId) internal virtual onlyDepositor(_tokenId)
```

### Modifiers

#### onlyDepositor

Allow only depositors

```
modifier onlyDepositor(uint256 _tokenId)
```

#### onlyOperator

Allow only operators

```
 modifier onlyOperator(uint256 _tokenId)
```

#### onlyDepositorOrOperator

Allow only depositor or operator

```
modifier onlyDepositorOrOperator(uint256 _tokenId)
```
