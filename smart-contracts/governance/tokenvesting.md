# TokenVesting

## Introduction

The TokenVesting contract is meant to incentivize the initial core developers and backers of ZestyMarket. The contract has a token vesting cliff and and a token vesting period which would mirror time-based vesting contracts for conventional businesses. The only key difference is that the tokens would be distributed continuously. The vaults that manage token vesting can be revoked by the owner of the contract which would be managed by Zesty Market's operational multisig account.

## Specifications

### Constructor

The TokenVesting contract is an ownable contract whose owner would be Zesty Market's operational multisig. The token that the contract would manage is ZestyToken.

```
constructor (address owner_, address zestyTokenAddress_) Ownable(owner_)
```

### Getter Functions

#### getZestyTokenAddress

Returns the address for ZestyToken

```
function getZestyTokenAddress() public view returns (address)
```

#### getVault

Returns the state of a vault containing ZestyTokens on the contract. \
`startTime` refers to the starting time of the vesting this is denoted by unix time in seconds.\
`amount` refers to the the amount of tokens to be distributed to the recipient. \
`amountClaimed` refers to the amount of tokens claimed by the recipient. \
`vestingDuration` refers to the time taken for the tokens to fully vest in seconds. The end time of the vesting is thus `startTime + vestingDuration`. \
`vestingCliff` refers to the duration where 0 tokens would be claimable, after the cliff tokens would be claimed following the vesting schedule. The end time of the vesting cliff is thus `startTime + vestingCliff`.

```
function getVault(address _recipient) public view returns (
    uint256 startTime,
    uint256 amount,
    uint256 amountClaimed,
    uint256 vestingDuration,
    uint256 vestingCliff
)
```

#### getAmountVested

Returns the amount vested by a recipient. The formula for vesting is a piecewise function.

$$
amountVested(time) = 
\begin{cases}
0 ,  time < startTime + vestingCliff \\ \\
amount, time >= startTime +vestingDuration \\ \\
\frac{amount}{vestingDuration}(time - startTime), otherwise
\end{cases}
$$

```
function getAmountVested(address _recipient) public view  returns (uint256) 
```

### State Changing Functions

#### newVault

Creates a new vault. This is a non-reentrant function and can only be called by the owner of the contract. It will transfer tokens from the owner to the contract for storage.

```
function newVault(
    address _recipient,
    uint256 _amount,
    uint256 _vestingDuration,
    uint256 _vestingCliff
) 
    public
    onlyOwner 
    nonReentrant
```

#### cancelVault

Cancels the vault. This is a non-reentrant function and can only be called by the owner of the contract. It will transfer tokens that are already vested to the recipient. Tokens that are not vested would be transferred back to the owner.

```
function cancelVault(address _recipient) public onlyOwner nonReentrant 
```

#### claimVault

Claims vested funds. This is a non-reentrant function and can be called by anyone. Address without a vault would be rejected. If there are no tokens claimable the call would be rejected. Otherwise, it would transfer vested tokens back to the caller.

```
function claimVault() public nonReentrant 
```

#### recoverERC20

Claims lost ERC20 tokens, only allows claiming of ERC20 tokens that are not ZestyTokens. This function is implemented in case some one deposits ERC20 to the contract by accident. The ERC20 tokens will be transferred to the owner of the contract. This is a non-reentrant function and can only be called by the owner of the contract. 

```
function recoverERC20(address tokenAddress, uint256 tokenAmount) external onlyOwner nonReentrant
```
