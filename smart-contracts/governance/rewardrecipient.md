---
description: Forked from Synthetix's RewardDistributor
---

# RewardRecipient

## Introduction

Abstract contract which allow for the receipt of reward tokens given out by the reward distributor. 

## Specification

### Constructor

Takes in the owner address (this should be the zesty DAO address) and the reward distributor contract address

```
constructor(address owner_, address rewardsDistributor_) 
    Ownable(owner_)
```

### Getter Functions

#### rewardsDistributor

Returns the reward distributor contract address

```
function rewardsDistributor() external view virtual returns (address)
```

### State Changing Functions

#### notifyRewardAmount 

Virtual empty function that can be used in inherited contracts

```
function notifyRewardAmount(uint256 rewards) external virtual
```

#### setRewardsDistributor

Allows the owner to set the address of the reward distributor

```
function setRewardsDistributor(address rewardsDistributor_) external virtual onlyOwner 
```

#### onlyRewardsDistributor

Modifier to only allow the rewards distributor address to call

```
modifier onlyRewardsDistributor()
```
