import { BigInt } from "@graphprotocol/graph-ts"
import {
  ContractAdded
} from "../generated/Factory/Factory"
import { 
  Contract,
  Collection
} from "../generated/schema"
import { IERC721 } from '../generated/templates'

// initialization event: ContractAdded(address)
export function handleContractAdded(event: ContractAdded): void {
  /**
   * Here is where we can configure our factory mappings to the type of
   * data source we want our subgraph to listen for in our contract.
   */
  
  /**
   * Notice: This example only passes in the contract address (which is required). You can
   * pass in any additional parameters with your initialization event that would help 
   * define the context of how to route your subgraph to the correct data source.
   */

  let contract = Contract.load("TRANSFERS_ERC721");
  if(!contract) {
    contract = new Contract("TRANSFERS_ERC721");
  }

  // note: consecutive transfers are currently only tracked as one transfer call
  let nftContract = Collection.load(event.address.toHex());

  // for new contracts, create a new Collection entity
  if(!nftContract) {
    nftContract = new Collection(event.address.toHex());
    nftContract.timestamp_added = event.block.timestamp.toI32();
    nftContract.block_added = event.block.number.toI32();
    nftContract.contractAddress = event.params.contractAddress;
    nftContract.total_transfers = BigInt.fromI32(0);
    nftContract.last_tx_hash = event.transaction.hash.toHex();
    nftContract.last_tx_timestamp = event.block.timestamp.toI32();
    nftContract.timestamp_added = event.block.timestamp.toI32();

    // assign template to this NFT contract
    nftContract.templateType = contract.id;
  }

  contract.save();
  nftContract.save();


  // initialize the data source template for the contract
  // now the subgraph will start listening to events from this contract
  IERC721.create(event.params.contractAddress);
}
