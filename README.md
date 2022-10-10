
## Live Demo
View a live demo of the [playground](https://thegraph.com/hosted-service/subgraph/r-strawser/simple-subgraph-factory)
or the [demo app](https://subgen.vercel.app/)


### Description
The Simple Subgraph Factory subgraph indexes all ERC721 transfer activity from the time the contract is added to the subgraph. Contracts can be added dynamically by calling the factory contract function that fires the initialization event. The initialization event is the event that is then used to create a new subgraph according to the template data source mappings. Template data source mappings are set by the subgraph development team. The template data source and it's respective mappings are configurable to the context of the developers goal. Any contract can have it's events tracked dynamically by obtaining the contract's ABI. Data source template docs found [here](https://thegraph.com/docs/en/developing/creating-a-subgraph/#data-source-templates).

### Usage
Submit the address of a deployed contract using the ERC721 interface to initialize the subgraph with the contract. Once the transaction succeeds, the subgraph will then start listening for contract events specified in the supported template.

### Use Cases
- Development teams tracking stats of factory contracts such as Uniswap and Thirdweb.
- Using generalized data obtained from popular contract ABIs or formats to create dynamically generated subgraphs. i.e. [Messari](https://github.com/messari/subgraphs) subgraph standardization
- Accept payments for offering a subgraph template that is sought after by the community or a company.

### Test it out
Deploy a contract on Aurora testnet that implements the ERC721 interface. Submit the contract address to the factory contract. Call a function from your contract that fires a Transfer event... that's it! The subgraph will then index the event and update the demo app with your contract.
