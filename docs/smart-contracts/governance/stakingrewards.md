---
description: Forked from Synthetix StakindRewards
---

# StakingRewards

## Introduction

Allows participants in the Zesty Market to stake their ZESTY tokens for more ZESTY tokens. This contract is designed to reduce the token velocity of ZESTY tokens. Note that tokens have to be unstaked and re-delegated should a user want to participate in governance decisions. Alternatively, users can call getReward to retrieve rewarded ZESTY tokens to participate in governance too.

## Specifications

### Constructor

Specify the owner of the StakingReward contract (this should be Zesty DAO), the reward distributor contract address, the address of the rewards and staking token.

```
constructor(
    address owner_,
    address rewardsDistributor_,
    address rewardsToken_,
    address stakingToken_
) RewardsRecipient(owner_, rewardsDistributor_)
```

### Getter Functions

#### totalSupply

Returns the total amount of staked tokens in the contract

```
function totalSupply() external view override returns (uint256)
```

#### balanceOf

Returns the balance of a given account which had staked tokens

```
function balanceOf(address account) external view override returns (uint256)
```

#### lastTimeRewardApplicable

Returns the current block.timestamp or the last period where rewards token were given to the contract.

```
function lastTimeRewardApplicable() public view override returns (uint256)
```

#### rewardPerToken

Returns the reward per staked token given the rewardRate.

```
function rewardPerToken() public view override returns (uint256)
```

#### earned

Returns the earnings of an account

```
function earned(address account) public view override returns (uint256)
```

#### rewardsToken

Returns the reward token address

```
function rewardsToken() external view override returns (address) 
```

#### stakingToken

Returns the staking token address

```
function stakingToken() external view override returns (address)
```

#### rewardsDistributor

Returns the reward distributor contract address

```
function rewardsDistributor() external view override(IStakingRewards, RewardsRecipient) returns (address)
```

### State Changing Functions

#### stake

Stake the staking token into the contract

```
function stake(uint256 amount) external override nonReentrant updateReward(msg.sender)
```

#### withdraw

Withdraw deposited staking token from the contract

```
function withdraw(uint256 amount) public override nonReentrant updateReward(msg.sender) 
```

#### getReward

Get the rewards for staking done

```
function getReward() public override nonReentrant updateReward(msg.sender) 
```

#### exit

Calls withdraw and getReward

```
function exit() external override
```

#### notifyRewardAmount

Updates the contract state variables `rewardRate`,`balance` of the StakingRewards contract, `lastUpdateTime` and `periodFinish` after the RewardDistributor has given tokens to the contract.

```
function notifyRewardAmount(uint256 reward) external override onlyRewardsDistributor updateReward(address(0)) 
```

#### updatePeriodFinish

Allows ZestyDAO to change the periodFinish variable which would end rewards emissions earlier or later. Note that changing this would modify the `lastTimeRewardApplicable` function and the `rewardPerToken` function.

```
function updatePeriodFinish(uint timestamp) external onlyOwner updateReward(address(0))
```

#### recoverERC20

Allows ZestyDAO to recover tokens that are not staking tokens from the contract.

```
function recoverERC20(address tokenAddress, uint256 tokenAmount) external onlyOwner 
```

#### setRewardDuration

Sets the reward duration. Note that changing the reward duration would modify the `rewardRate` when `notifyRewardAmount` is called by RewardsDistributor.

```
function setRewardsDuration(uint256 _rewardsDuration) external onlyOwner
```

### Modifiers

#### updateReward

Updates the reward tokens earned by an account. Updates the `rewardPerTokenStored` variable and the `lastUpdateTime` variable.

```
 modifier updateReward(address account)
```

 
