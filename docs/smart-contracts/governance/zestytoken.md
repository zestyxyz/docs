---
description: Forked from Compound's Governance module
---

# ZestyToken/GovernorAlpha/Timelock

ZestyTokens adopts the Governor Alpha version of Compound's [COMP token specification](https://compound.finance/docs/governance#comp), Compound's implementation was chosen as it was simple and reliable. The protocol may adopt the Governor Bravo specification by Compound at a later date. Zesty Market is grateful for the contributions of Compound in the Ethereum ecosystem.

Likewise with Compound protocol, Zesty Market will be governed and upgraded by ZESTY token holders. The components are; ZestyToken, GovernorAlpha, and Timelock. Proposals are much more general on Zesty Market as compared to Compound. The Timelock contract can be treated as the decentralized owner of ZestyMarket.

ZestyTokens has a fixed supply of 100,000,000 ZESTY. Any address with more than 1,000,000 ZESTY (1% of ZESTY) delegated to it may propose governance actions, which are executable code. When a proposal is created, the community can submit their votes during a 3 day voting period. If a majority, and at least 7,000,000 (7% of  ZESTY) votes are cast for the proposal, it is queued in the Timelock, and can be implemented after a minimum of 2 days.

![Flow of Compound's Governor Alpha](<../../../.gitbook/assets/image (2) (2).png>)

### ZestyToken

ZestyToken is an [ERC-20](https://web.archive.org/web/20210111014331mp\_/https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) token that allows the owner to delegate voting rights to any address, including their own address. Changes to the owner’s token balance automatically adjust the voting rights of the delegate.

### Delegate

Delegate votes from the sender to the delegatee. Users can delegate to 1 address at a time, and the number of votes added to the delegatee’s vote count is equivalent to the balance of COMP in the user’s account. Votes are delegated from the current block and onward, until the sender delegates again, or transfers their ZESTY.

**ZestyToken**

```
function delegate(address delegatee)
```

* delegatee: The address in which the sender wishes to delegate their votes to.
* msg.sender: The address of the ZESTY token holder that is attempting to delegate their votes.
* RETURN: No return, reverts on error.

**Solidity**

```
ZestyToken zesty = ZestyToken(0x123...); // contract address
zesty.delegate(delegateeAddress);
```

**Web3 1.2.6**

```
const tx = await zesty.methods.delegate(delegateeAddress).send({ from: sender });
```

### Delegate By Signature

Delegate votes from the signatory to the delegatee. This method has the same purpose as Delegate but it instead enables offline signatures to participate in Zesty Market's governance vote delegation. For more details on how to create an offline signature, review [EIP-712](https://web.archive.org/web/20210111014331mp\_/https://eips.ethereum.org/EIPS/eip-712).

**ZestyToken**

```
function delegateBySig(address delegatee, uint nonce, uint expiry, uint8 v, bytes32 r, bytes32 s)
```

* delegatee: The address in which the sender wishes to delegate their votes to.
* nonce: The contract state required to match the signature. This can be retrieved from the contract’s public nonces mapping.
* expiry: The time at which to expire the signature. A block timestamp as seconds since the unix epoch (uint).
* v: The recovery byte of the signature.
* r: Half of the ECDSA signature pair.
* s: Half of the ECDSA signature pair.
* RETURN: No return, reverts on error.

**Solidity**

```
ZestyToken zesty = ZestyToken(0x123...); // contract address
zesty.delegateBySig(delegateeAddress, nonce, expiry, v, r, s);
```

**Web3 1.2.6**

```
const tx = await zesty.methods.delegateBySig(delegateeAddress, nonce, expiry, v, r, s).send({});
```

### Get Current Votes

Gets the balance of votes for an account as of the current block.

**ZestyToken**

```
function getCurrentVotes(address account) returns (uint96)
```

* account: Address of the account in which to retrieve the number of votes.
* RETURN: The number of votes (integer).

**Solidity**

```
ZestyMarket zesty = ZestyToken(0x123...); // contract address
uint votes = zesty.getCurrentVotes(0xabc...);
```

**Web3 1.2.6**

```
const account = '0x123...'; // contract address
const votes = await zesty.methods.getCurrentVotes(account).call();
```

### Get Prior Votes

Gets the prior number of votes for an account at a specific block number. The block number passed must be a finalized block or the function will revert.

**ZestyMarket**

```
function getPriorVotes(address account, uint blockNumber) returns (uint96)
```

* account: Address of the account in which to retrieve the prior number of votes.
* blockNumber: The block number at which to retrieve the prior number of votes.
* RETURN: The number of prior votes.

**Solidity**

```
ZestyMarket zesty = ZestyMarket(0x123...); // contract address
uint priorVotes = zesty.getPriorVotes(account, blockNumber);
```

**Web3 1.2.6**

```
const priorVotes = await zesty.methods.getPriorVotes(account, blockNumber).call();
```

### Key Events

| Event                                                                                                                                                                        | Description                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)                                                                         | An event thats emitted when an account changes its [delegate](https://web.archive.org/web/20210111014331if\_/https://compound.finance/docs/governance#delegate).                                                                                                           |
| DelegateVotesChanged(address indexed delegate, uint previousBalance, uint newBalance)                                                                                        | An event thats emitted when a delegate account's vote balance changes.                                                                                                                                                                                                     |
| ProposalCreated(uint id, address proposer, address\[] targets, uint\[] values, string\[] signatures, bytes\[] calldatas, uint startBlock, uint endBlock, string description) | An event emitted when a new [proposal](https://web.archive.org/web/20210111014331if\_/https://compound.finance/docs/governance#propose) is created.                                                                                                                        |
| VoteCast(address voter, uint proposalId, bool support, uint votes)                                                                                                           | An event emitted when a [vote has been cast](https://web.archive.org/web/20210111014331if\_/https://compound.finance/docs/governance#cast-vote) on a proposal.                                                                                                             |
| ProposalCanceled(uint id)                                                                                                                                                    | An event emitted when a proposal has been [canceled](https://web.archive.org/web/20210111014331if\_/https://compound.finance/docs/governance#cancel).                                                                                                                      |
| ProposalQueued(uint id, uint eta)                                                                                                                                            | An event emitted when a proposal has been [queued](https://web.archive.org/web/20210111014331if\_/https://compound.finance/docs/governance#queue) in the [Timelock](https://web.archive.org/web/20210111014331if\_/https://compound.finance/docs/governance#timelock).     |
| ProposalExecuted(uint id)                                                                                                                                                    | An event emitted when a proposal has been [executed](https://web.archive.org/web/20210111014331if\_/https://compound.finance/docs/governance#execute) in the [Timelock](https://web.archive.org/web/20210111014331if\_/https://compound.finance/docs/governance#timelock). |

### Governor Alpha

Governor Alpha is the governance module of the protocol; it allows addresses with more than 1,000,000 ZESTY to propose changes to the protocol. Addresses that held voting weight, at the start of the proposal, invoked through the getpriorvotes function, can submit their votes during a 3 day voting period. If a majority, and at least 7,000,000 votes are cast for the proposal, it is queued in the Timelock, and can be implemented after 2 days.

### Quorum Votes

The required minimum number of votes in support of a proposal for it to succeed.

**Governor Alpha**

```
function quorumVotes() public pure returns (uint)
```

* RETURN: The minimum number of votes required for a proposal to succeed.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
uint quorum = gov.quorumVotes();
```

**Web3 1.2.6**

```
const quorum = await gov.methods.quorumVotes().call();
```

### Proposal Threshold

The minimum number of votes required for an account to create a proposal.

**Governor Alpha**

```
function proposalThreshold() returns (uint)
```

* RETURN: The minimum number of votes required for an account to create a proposal.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
uint threshold = gov.proposalThreshold();
```

**Web3 1.2.6**

```
const threshold = await gov.methods.proposalThreshold().call();
```

### Proposal Max Operations

The maximum number of actions that can be included in a proposal. Actions are functions calls that will be made when a proposal succeeds and executes.

**Governor Alpha**

```
function proposalMaxOperations() returns (uint)
```

* RETURN: The maximum number of actions that can be included in a proposal.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
uint operations = gov.proposalMaxOperations();
```

**Web3 1.2.6**

```
const operations = await gov.methods.proposalMaxOperations().call();
```

### Voting Delay

The number of Ethereum blocks to wait before voting on a proposal may begin. This value is added to the current block number when a proposal is created.

**Governor Alpha**

```
function votingDelay() returns (uint)
```

* RETURN: Number of blocks to wait before voting on a proposal may begin.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
uint blocks = gov.votingDelay();
```

**Web3 1.2.6**

```
const blocks = await gov.methods.votingDelay().call();
```

### Voting Period

The duration of voting on a proposal, in Ethereum blocks.

**Governor Alpha**

```
function votingPeriod() returns (uint)
```

* RETURN: The duration of voting on a proposal, in Ethereum blocks.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
uint blocks = gov.votingPeriod();
```

**Web3 1.2.6**

```
const blocks = await gov.methods.votingPeriod().call();
```

### Propose

Create a Proposal to call any function that would be executed by Timelock.

Proposals will be voted on by delegated voters. If there is sufficient support before the voting period ends, the proposal shall be automatically enacted. Enacted proposals are queued and executed in the ZestyMarket Timelock contract.

The sender must hold more ZESTY than the current proposal threshold (proposalThreshold()) as of the immediately previous block. If the threshold is 1,000,000 ZESTY, the sender must have been delegated more than 1% of all ZESTY in order to create a proposal. The proposal can have up to 10 actions (based on proposalMaxOperations()).

The proposer cannot create another proposal if they currently have a pending or active proposal. It is not possible to queue two identical actions in the same block (due to a restriction in the Timelock), therefore actions in a single proposal must be unique, and unique proposals that share an identical action must be queued in different blocks.

**Governor Alpha**

```
function propose(address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas, string memory description) returns (uint)
```

* targets: The ordered list of target addresses for calls to be made during proposal execution. This array must be the same length as all other array parameters in this function.
* values: The ordered list of values (i.e. msg.value) to be passed to the calls made during proposal execution. This array must be the same length as all other array parameters in this function.
* signatures: The ordered list of function signatures to be passed during execution. This array must be the same length as all other array parameters in this function.
* calldatas: The ordered list of data to be passed to each individual function call during proposal execution. This array must be the same length as all other array parameters in this function.
* description: A human readable description of the proposal and the changes it will enact.
* RETURN: The ID of the newly created proposal.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
uint proposalId = gov.propose(targets, values, signatures, calldatas, description);
```

**Web3 1.2.6**

```
const tx = gov.methods.propose(targets, values, signatures, calldatas, description).send({ from: sender });
```

### Queue

After a proposal has succeeded, any address can call the queue method to move the proposal into the Timelock queue. A proposal can only be queued if it has succeeded.

**Governor Alpha**

```
function queue(uint proposalId)
```

* proposalId: ID of a proposal that has succeeded.
* RETURN: No return, reverts on error.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.queue(proposalId);
```

**Web3 1.2.6**

```
const tx = gov.methods.queue(proposalId).send({ from: sender });
```

### Execute

After the Timelock delay period, any account may invoke the execute method to apply the changes from the proposal to the target contracts. This will invoke each of the actions described in the proposal.

This function is payable so the Timelock contract can invoke payable functions that were selected in the proposal. 

**Governor Alpha**

```
function execute(uint proposalId) payable returns (uint)
```

* proposalId: ID of a succeeded proposal to execute.
* RETURN: No return, reverts on error.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.execute(proposalId).value(999).gas(999)();
```

**Web3 1.2.6**

```
const tx = gov.methods.execute(proposalId).send({ from: sender, value: 1 });
```

### Cancel

Cancel a proposal that has not yet been executed. The Guardian is the only one who may execute this unless the proposer does not maintain the delegates required to create a proposal. If the proposer does not have more delegates than the proposal threshold, anyone can cancel the proposal.

**Governor Alpha**

```
function cancel(uint proposalId)
```

* proposalId: ID of a proposal to cancel. The proposal cannot have already been executed.
* RETURN: No return, reverts on error.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.cancel(proposalId);
```

**Web3 1.2.6**

```
const tx = gov.methods.cancel(proposalId).send({ from: sender });
```

### Get Actions

Gets the actions of a selected proposal. Pass a proposal ID and get the targets, values, signatures and calldatas of that proposal.

**Governor Alpha**

```
function getActions(uint proposalId) returns (uint proposalId) public view returns (address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas)
```

* proposalId: ID of a proposal in which to get its actions.
* RETURN: Reverts if the proposal ID is invalid. If successful, the following 4 references are returned.

1. Array of addresses of contracts the proposal calls.
2. Array of unsigned integers the proposal uses as values.
3. Array of strings of the proposal’s signatures.
4. Array of calldata bytes of the proposal.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
uint proposalId = 123;
(address[] memory targets, uint[] memory values, string[] memory signatures, bytes[] memory calldatas) = gov.getActions(proposalId);
```

**Web3 1.2.6**

```
const {0: targets, 1: values, 2: signatures, 3: calldatas} = gov.methods.getActions(proposalId).call();
```

### Get Receipt

Gets a proposal ballot receipt of the indicated voter.

**Governor Alpha**

```
function getReceipt(uint proposalId, address voter) returns (Receipt memory)
```

* proposalId: ID of the proposal in which to get a voter’s ballot receipt.
* voter: Address of the account of a proposal voter.
* RETURN: Reverts on error. If successful, returns a Receipt struct for the ballot of the voter address.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
Receipt ballot = gov.getReceipt(proposalId, voterAddress);
```

**Web3 1.2.6**

```
const proposalId = 11;
const voterAddress = '0x123...';
const result = await gov.methods.getReceipt(proposalId, voterAddress).call();
const { hasVoted, support, votes } = result;
```

### State

Gets the proposal state for the specified proposal. The return value, ProposalState is an enumerated type defined in the Governor Alpha contract.

**Governor Alpha**

```
function state(uint proposalId) returns (ProposalState)
```

* proposalId: ID of a proposal in which to get its state.
* RETURN: Enumerated type ProposalState. The types are Pending, Active, Canceled, Defeated, Succeeded, Queued, Expired, andExecuted.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
GovernorAlpha.ProposalState state = gov.state(123);
```

**Web3 1.2.6**

```
const proposalStates = ['Pending', 'Active', 'Canceled', 'Defeated', 'Succeeded', 'Queued', 'Expired', 'Executed'];
const proposalId = 123;
result = await gov.methods.state(proposalId).call();
const proposalState = proposalStates[result];
```

### Cast Vote

Cast a vote on a proposal. The account's voting weight is determined by the number of votes the account had delegated to it at the time the proposal state became active.

**Governor Alpha**

```
function castVote(uint proposalId, bool support)
```

* proposalId: ID of a proposal in which to cast a vote.
* support: A boolean of true for 'yes' or false for 'no' on the proposal vote.
* RETURN: No return, reverts on error.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.castVote(proposalId, true);
```

**Web3 1.2.6**

```
const tx = gov.methods.castVote(proposalId, false).send({ from: sender });
```

### Cast Vote By Signature

Cast a vote on a proposal. The account's voting weight is determined by the number of votes the account had delegated at the time that proposal state became active. This method has the same purpose as Cast Vote but it instead enables offline signatures to participate in Compound governance voting. For more details on how to create an offline signature, review [EIP-712](https://web.archive.org/web/20210111014331mp\_/https://eips.ethereum.org/EIPS/eip-712).

**Governor Alpha**

```
function castVoteBySig(uint proposalId, bool support, uint8 v, bytes32 r, bytes32 s)
```

* proposalId: ID of a proposal in which to cast a vote.
* support: A boolean of true for 'yes' or false for 'no' on the proposal vote.
* v: The recovery byte of the signature.
* r: Half of the ECDSA signature pair.
* s: Half of the ECDSA signature pair.
* RETURN: No return, reverts on error.

**Solidity**

```
GovernorAlpha gov = GovernorAlpha(0x123...); // contract address
gov.castVoteBySig(proposalId, true, v, r, s);
```

**Web3 1.2.6**

```
const tx = await gov.methods.castVoteBySig(proposalId, false, v, r, s).send({});
```

### Timelock

The Timelock is a decentralized owner of ZestyMarket and can execute any functions and store token like a treasury. We will refer to the Timelock contract and Zesty DAO interchangeably.

The Timelock has a hard-coded minimum delay of 2 days, which is the least amount of notice possible for a governance action. Each proposed action will be published at a minimum of 2 days in the future from the time of announcement. Major upgrades, such as changing the risk system, may have a 14 day delay.

The Timelock is controlled by the governance module; pending and completed governance actions can be monitored on the [Timelock Dashboard](https://web.archive.org/web/20210111014331mp\_/https://app.compound.finance/timelock).

### Pause Guardian

The Pause Guardian address is assigned to the Timelock contract.
