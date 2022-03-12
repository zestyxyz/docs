---
description: Version 0.3
---

# Litepaper

## Changelog

* Version 0.3 (Dec 2021)
  * Added "Changelog"
  * Update Abstract to reflect changes in product
  * ”Metaverse” —> "Building the Open Metaverse"
  * "Scarcity and Cash Flow" —> "Tokenizing Attention and Building Bridges"
  * "How it Works" —> "System Design"
  * Add "Beacons"
* Version 0.2 (May 2021)
  * Refine wording
* Version 0.1 (Jan 2021)
  * Initial ideation

## Abstract

Zesty Market empowers entrepreneurs and builders in the metaverse with essential business tools. Our goal is to provide creators with a method of capturing the value that they create without dependence on a centralized platform.

Our first product is an open market for the buying and selling of banner spaces in virtual worlds, whether they are blockchain-based (like Cryptovoxels) or not (standard WebXR/Unity apps).

We are building an alternative to centralized advertising networks that have come to extract an outsized amount of value from creators. Twitch takes 50% of all revenue from subscriptions, and YouTube takes 30-40% of its creators’ ad revenue.&#x20;

Sometimes, these platforms have been known to outright demonetize the creator, where the person is no longer able to earn an income from the content that they create. It’s clear that these platforms have too much power.

Using Zesty's open-sourced SDK, creators are able to tokenize spaces in games or livestreams into an NFT. Using our market contract, creators can rent out time slots to a potential advertiser. The revenue from the rental would go directly to the creator on-chain.&#x20;

Zesty Market generates revenue from fees from market transactions.&#x20;

Currently, the SDK supports: WebXR platforms, Unity, Cryptovoxels, and we plan to expand to other platforms where there is demand for such services.

Zesty will exit to the community, which means that one day we will be owned by our most loyal users, which will include creators and advertisers. So instead of having to purchase shares of Google (who owns YouTube) or Amazon (who owns Twitch), people will be able to grow their ownership share in Zesty just by using it. With a financial and attention ecosystem that would be favorable for creators, Zesty Market will pave the way for an open metaverse where everyone has a stake.

## Our Commitment to Building the Open Metaverse

The Metaverse was a term that emerged from Neal Stephenson's book Snowcrash. The idea of an immersive virtual society where dreams can become digital reality has captivated people for decades. The idea spurred stories like Ready Player One/Two, and Sword Art Online. However, the setting in all cases have been notably dystopian with some evil corporation being the centre of misery.

To avoid a dystopian Metaverse, it is necessary for communities to have power over the Metaverse. Monetization and how money flows plays a significant role in this power dynamics. Web3 and cryptocurrencies had introduced new primitives and ways we can think about monetization. Knowledge is power, cryptography mediates knowledge, therefore cryptography mediates power.

With Web3, tokenization, and NFTs, we now have the ability to declare digital property rights that can be owned by people without the need of corruptible authorities. Truth and ownership is now enshrined through distributed digital ledgers. Historically, wars have been fought over property rights. Now, the revolution on digital property rights will be non-violent. It is a revolution fueled by innovative ideas that will change the way society will work.

Visions remain visions without the necessary footwork and human coordination. Zesty seeks to help facilitate this and provide the foundations for creators to monetize freely and easily with web3. We expect a feedback loop with respect to content being created and monetization opportunities being present in the Metaverse. With more opportunities for wealth, more people will create content in the Metaverse, resulting in more emergent opportunities. Rogue players will want to eat a large chunk of this pie at the expense of others. Centralized app stores will tend to exhibit rent-seeking behaviors when they reach some critical mass. They may appear open at first, but users and developers will not be able to avoid a bait-and-switch once they are beholden to the system.&#x20;

The need for decentralized alternatives has never been more important. This calls for open monetization mechanisms, open data platforms, and open tooling that is accessible to the community. All these need to be designed in a way to avoid rent-seeking behaviors and a bait-and-switch scenario should the protocol mature. Zesty seeks to steward new ways of rethinking valuable web2 business models in a web3 paradigm where users are not the product but are important stakeholders.

## Tokenizing Attention and Building Bridges

Attention is a vital resource in the internet. Attention is finite, there is a finite number of people and a finite amount of time that people can pay attention to something at once. Systems that are able to direct attentions act like important trade routes on the internet. Corporations who manage search engines, social media platforms, large e-commerce marketplaces, effectively own these trade routes. This makes such corporations really powerful as access to markets will be decided by such corporations. To sell anything on the internet, merchants will need to acquire attention which will be largely dominated by such corporations.

At Zesty we acknowledge that there is an emerging creator class on the internet (influencers, game developers). They are able to generate substantial attention on their own. Right now this emerging creator class has no real means of monetizing such attention without a centralized corporation like Youtube, Twitch, Google AdMob etc, who would have significant influence over how creators should operate. This undermines creativity and the freedom of expression.&#x20;

Bridging this merchant class and creator class in a decentralized way will be an important milestone in web3. Through decentralization, creators and merchants will be able to operate more autonomously. By tokenizing assets as NFTs and renting time slots out for advertising income, creators will be able to create new financial vehicles for themselves that would be valuable. Such NFTs are able to capture cash flow and will be able to act as financial assets. This makes it possible for creators to underwrite of loans and insurances which would not have been accessible in traditional finance. With further composability between NFTs and DeFi primitives, creators are also able to access new financial opportunities that would not have been possible.

Advertising in the Metaverse will resemble more like portals that are tucked away in game worlds. It will be a primary way of discovering new worlds and games in the Metaverse. The natural way of discovering things in a spatial way is walking through doors or portals. Most games are incentivized towards lock-in and selfish value capture. Incentivizes will be required to build an open Metaverse. Through the adoption of the Zesty SDK in various games and experiences, we hope to build bridges between games. We hope to create a seamless way of discovering new experiences that are favorable to games and make it profitable for experiences to share users. The side-effect of adopting the Zesty SDK is that there would now be a common code standard adopted throughout games making the sharing of game assets throughout disparate game experiences a possibility.&#x20;

At Zesty, we envision a future where it becomes possible to put businesses on-chain. It's an inevitable consequence of digitalizing businesses. The cashflow NFTs we pioneer at Zesty is one such construct that would aid in this transition. We foresee a future where it might be possible to sell an online business through a transaction on a blockchain, by transferring a revenue-accruing NFT and its related ENS domains. With DeFi opportunities, digital businesses will be able to tap into new models of capital and financing, increasing capital efficiency like never before. With lesser border restrictions on capital flow, we envision new business opportunities that should arise from web3 primitives. Our mission at Zesty is to research and ideate on new web3 primitives that should unlock new opportunities for people.

## System Design

### Zesty Market Protocol

Zesty's flagship product is a decentralized p2p marketplace for advertising spaces. We outline the design of this decentralized advertising system.

In online advertising, there are three key stakeholders: Advertisers, Publishers/Creators, and Consumers. Advertisers buy advertising slots from publishers to leverage their reach in order to get information out to consumers. This structure is the basis of the attention economy that the internet is built upon. In the Web 2.0 model, the relationship between the key stakeholders is mediated by a centralized third party who mediates the flow of money as well as the flow of attention. Zesty Market proposes a decentralized structure for how this could be implemented.

The sale and fulfillment of the advertising slot are done in two parts:

1. A Dutch Auction for price discovery of the advertising slot
2. A Hash Timelock Contract augmented with Publicly Verifiable Secret Sharing (PVSS) for decentralized validation of the advertising slot.&#x20;

By treating the serving of media on a digital space as a delivery vs payment (DvP) problem, the system is able to facilitate value transfer in a decentralized way. Profits from the auction are redistributed to validators and the DAO (for future development of the protocol).&#x20;

#### Dutch Auction of Time Slots

Zesty Market uses a Dutch Auction for price discovery of advertising time slot. Publishers/Creators on Zesty Market would need to first create advertising slots by minting non-fungible tokens (NFT) that would represent some kind of digital space.&#x20;

Once the NFT is minted, the publisher would be able to deposit the NFT into the Zesty Market contract to rent out time slots. By depositing the NFT, the Publisher is not able to modify the metadata associated with the NFT during the sale and service of the advertising time slot. The publisher would be able to define time slots and sell those time slots on the marketplace.&#x20;

The primary sale model is a Dutch auction.  The value of the time slot is represented by a linearly decreasing function as follows:

$$V(T_{i}) = V(T_{0}) - (T_{i} - T_{0}) \times \frac{V(T_{0})}{T_{n} - T_{0}}$$

**Definitions**

$$V(T_i)$$refers to the current time slot price

$$V(T_{0})$$refers to the starting price of the time slot

$$T_i$$refers to the current time in Unix time

$$T_0$$refers to the starting time of the Dutch auction in Unix time

$$T_n$$refers to the expiration time of the time slot in Unix time

When the time slot approaches expiry, the price of the auction approaches zero. The walk away price for the time slot can be defined by the publisher based on the ending time of the auction on the contract. If the end time of the auction is the same as the end time of the time slot, the walk away price would be zero. The expiration time for auction can be set to an appropriate time in order to prevent pointless bidding. The default expiration time is 1 hour before the expiration of the advertising slot. An example of pointless bidding is as follows. For example, bidding for 1 minute prior to the expiration of the advertising. Due to block confirmation times, it can be difficult to fulfill an advertising service within 1 minute. As such, the default expiration time of the Dutch auction is set at 1 hour before the expiration of the NFT time slot.

The Dutch Auction model is chosen as the primary mode of sale as it has the ability to regulate prices towards some optima. Advertisers would need to find the optimum price to bid for. If the expected cost of customer acquisition on a particular time slot is greater than the revenue generated per conversion, it would not be rational to bid on the time slot. If a publisher falsely advertises an inflated expected impression or click counts for a time slot, future buyers will be less likely to be buyers as purchases would not be rational. This results in a decrease in price for fraudulent time slots. This makes it unprofitable for fraudulent publishers to operate on the network. As the Zesty Market Protocol does not charge advertising fees based on click or impression count and gives buyers the autonomy to bid in a white-box manner, the protocol becomes resilient to click and impression fraud unlike conventional advertising platforms.

We acknowledge that it may be impractical for advertisers to bid manually. With on-chain data and off-chain data provided through Beacons (see "Beacons" section) it is possible for a secondary marketplace for bidding strategies to emerge. Bot makers who are adept at building out strategies can in future sell such bidding strategies to advertisers to help optimize advertising spend and cost of customer acquisition.

When an advertiser succesfully bids for the time slot, the Dutch auction concludes and the system proceeds to the next phase which is the Hash Timelock phase. The funds that are used for bidding would be locked in the Hash Timelock. No funds will be transferred until the successful conclusion of the Hash Timelock phase.

#### Hash Timelock Contract with Publicly Verifiable Secret Sharing for Advertising Services

To mediate the successful completion of advertising service. It is possible to model the system as a delivery vs payment (DvP) problem. DvP is formerly a term used in security settlements to guarantee that the transfer of payment is made only when the transfer of a security is made. In the case of advertising, it is analogous to the payment for advertising slots when the advertising service concludes. We will first discuss the case of securities settlements, this can be implemented using a Hash Timelock Contract.

#### **Hash Timelocks**

The Hash Timelock Contract is a vault containing a Hashlock and a Timelock, this ensures that two parties are able transfer funds securely without intermediaries. The normal flow for a Hash Timelock Contract is as follows:

1. Alice locks A-tokens into a vault and sets a timelock and a hashlock. The timelock prevents a party from withdrawing funds prior to some expiration time, and the hashlock is a hash of a secret.
2. Bob locks B-tokens into a vault and sets a timelock and copies the hashlock of Alice's vault into his vault.
3. Alice claims B-tokens from Bob's vault by revealing the secret which unlocks the hashlock.
4. Bob now knows the secret and unlocks funds from Alice's vault. Note that Alice could not withdraw funds yet as the timelock is still present.
5. If Alice does not claim the funds, the timelock expires for both vaults and the transfer is canceled.

In the case of security settlements or token transfers, the flow mentioned above is sufficient. However, an immediate problem emerges in the case of advertising services where one side possesses an asset to be transferred while the other is providing a service. There is an added complication of guaranteeing that a time-based service should be completed.

In web2, a centralized 3rd party would help mediate disputes. However, using cryptography techniques we are able to disintermediate the centralized 3rd party into a decentralized one using Publicly Verifiable Secret Sharing.

#### **Publicly Verifiable Secret** Sharing

Publicly Verifiable Secret Sharing is a way of distributing secret shares in a way where all parties can verify that the secret shares distributed are valid.

Secret sharing allows for a secret to be split into multiple secret shares, such that when you obtain a sufficient amount of secret shares you are able to find the original secret.

In the Zesty Market protocol, a randomly selected validator from a set of decentralized validators will be assigned as a dealer. This dealer will hash the secret and set it as the hashlock for the hash timelock contract and distribute secret shares to other validators on the network. It will also publish a string proof that the shares are valid. &#x20;

A validator would then check whether an advertisement is served at a random timeslot. Should the asset be served, the secret share will be published by the validator. The checking would be done on the validation client using the SIFT algorithm (Scale-Invariant Feature Transform), which would check for matching features in the shown media asset and media asset denoted on-chain by an advertiser. This validator may be a bot or a human user. In the case of a human user, the validation acts like a play-to-earn scheme, where the user gets paid to visit digital spaces. Validators would be rewarded either way should the advertising media be served or not.

When enough secret shares are known the publisher would be able to reconstruct the secret that would unlock the hashlock and withdraw the locked funds. If the publisher did not serve as expected, the publisher dvertise successfully the publisher will not be able to obtain sufficient shares to obtain the secret to unlock the vault. The advertiser would then be refunded at the end of the timelock.

**Protocol Design**

![Sequence Diagram of the Zesty Market Protocol](../.gitbook/assets/auctionhtlc.png)

### Beacons

An essential part of the advertising and the commerce pipeline is data. There are off-chain data that are very valuable but it would not make sense for the data to be put on-chain. A problem with analytics in the metaverse at the current moment is that is not good universal way of capturing data in a spatial way. This data is necessary to help with the discoverability of places in the Metaverse. There will need to be a "Google Maps" for the Metaverse in order for people to discover things intelligibly as spatial content increases exponentially.&#x20;

In order to build a map of the Metaverse, we will need data. To collect such data we will need to incentivize people to be willing to provide such data. As such one complimentary use case for such data is the Zesty Market Protocol. Collecting impressions and clickthrough rates at the current moment helps to compliment usage of the Zesty Market Protocol. The impression counts and clickthrough rates allow us to construct a heatmap of Metaverse experiences and where people cluster at. As the Beacon technology matures and more data is being collected, it would be possible to engineer additional data products on the Metaverse increasing the kinds of services that could possibly exist.

Data collection is a loaded term and can feel dirty but immense value can be created through the aggregation of data. As part of our commitment to building the open Metaverse, Zesty will seek to make this data layer a digital public good incentivized through tokenomics at Zesty. Beacons are built using Orbit DB and IPFS, as such decentralized ownership of the system is possible. There will be significant engineering effort required to create this system. As of now (11 Dec 2021), Beacons are hosted in a centralized way to simplify engineering efforts. Beacons are a feature that can be enabled on the Zesty SDK to allow for the collection of data. This is entirely opt-in. Data collection at the moment is limited to loads and clickthroughs which are anonymous. We think that data privacy is a human right and will do our best to respect it.
