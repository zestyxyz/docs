---
description: Bird's eye view of the smart contracts used at Zesty Market
---

# Overview

## Project Structure

The smart contracts used at Zesty Market can be broken down into five sections:

1.  **Market**&#x20;

    These are the contracts that help mediate the rental of tokenized advertising spaces on Zesty Market. The ZestyMarket contracts can be broken down into two sections: a Dutch Auction section for the price discovery of the advertising space, and a Contract Fulfillment section that pays out the buyer's stake once the advertisement has been delivered.   V1 and V2 contracts differ in the contract fulfillment section, in V1 no validation is being done for the contract fulfillment, while in V2 validation is provided (the mechanism is described in detail later). V2 contracts unlike V1 contracts would issue Zesty Tokens to incentivize participation.&#x20;
2.  **Governance**&#x20;

    These are contracts used by Zesty Market for governance and token incentives. Governance is administered on Zesty Market using a modified version of Compound Finance's Token contract, GovernorAlpha contract, and Timelock contract. Staking rewards is introduced through a fork of Synthetix's contracts. An additional TokenVesting contract is introduced by us to manage vesting schedules of core team members. &#x20;
3.  **Games**

    These are experiments done by Zesty Market to improve a Twitch streamer's engagement and to help streamers monetize using web3 technologies)
4.  **Utils**&#x20;

    The utils section consist of contracts adapted from [openzeppelin-contract version 3.4](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/release-v3.4/contracts) and other helper functions that are used in the three sections above.
5.  **Interfaces**&#x20;

    The interfaces section likewise with **Utils** consists of contracts adapted from [openzeppelin-contract version 3.4](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/release-v3.4/contracts) and other interfaces that are used in the three sections above.
