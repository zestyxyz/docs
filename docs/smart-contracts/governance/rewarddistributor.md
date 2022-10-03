---
description: Forked from Synthetix's RewardDistribution
---

# RewardDistributor

## Introduction

The reward distributor contract mediates the distribution of reward tokens to contracts in the Zesty Market ecosystem (eg. ZestyMarket contracts, Staking Rewards contracts). Upon receiving tokens the owner (in this case the Zesty DAO or Timelock contract) would be able to call the distributeRewards.

## Specifications

### Constructor

Set the owner and zestyTokenAddress for the contract. The owner would be the Zesty DAO.

```
constructor(address owner_, address rewardTokenAddress_) Ownable(owner_)
```

### Getter Functions

#### getRewardToken

Returns the address for the reward token

```
function getRewardToken() public view returns(address) 
```

#### getRecipient

Returns the address and amount to be distributed to a given recipient.

```
function getRecipient(uint256 _index) external view override returns (address recipient, uint256 amount)
```

#### getRecipientLength

Returns the length of recipient array

```
function getRecipientsLength() external view override returns (uint256)
```

### State Changing Functions

#### addRewardRecipient

Allows ZestyDAO to add a new reward recipient to the contract

```
unction addRewardRecipient(address _recipient, uint256 _amount) external onlyOwner returns (bool)
```

#### removeRewardRecipient

Allows ZestyDAO to remove a reward recipient from the contract. Note that the function uses a loop. We expect the recipient list to have a few elements < 10. So there should not be unbounded gas.

```
function removeRewardRecipient(uint256 _index) external onlyOwner
```

#### editRewardDistribution

Allows ZestyDAO to modify the recipient address and amount at a given index. This is needed when changes to reward distribution rate changes.

```
function editRewardDistribution(
    uint256 _index,
    address _recipient,
    uint256 _amount
) 
    external 
    onlyOwner 
    returns (bool)
```

#### distributeRewards

Allows ZestyDAO to distribute rewards to recipient address and call notifyRewardAmount. The amount specified should be enough to cover all recipients otherwise the function reverts.

```
function distributeRewards(uint256 _amount) external override onlyOwner returns (bool)
```

#### claimTokens

Allows ZestyDAO to claim any ERC20 tokens from the contract. This is in case if someone accidentally sends a wrong ERC20 into the contract.

```
function claimTokens(address _tokenAddress, uint256 _amount) public onlyOwner
```
