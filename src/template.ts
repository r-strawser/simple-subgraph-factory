import { BigInt } from "@graphprotocol/graph-ts";
import {
  Transfer as TransferEvent
} from "../generated/templates/IERC721/IERC721";
import {
  Collection,
  Transfer
} from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {

    /**
     * Here is where we can configure our template mappings for the selected
     * data source. Define data you want to track using the data source
     * for the added contracts here. (i.e. holders, sales, etc.)
     */

    /**
     * In this case, we are listening for the Transfer events from any contract
     * that has been added to the Factory contract and implments ERC721.
     */

  let nftContract = Collection.load(event.address.toHex());
  if(!nftContract) {
    nftContract = new Collection(event.address.toHex());
    nftContract.timestamp_added = event.block.timestamp.toI32();
    nftContract.block_added = event.block.number.toI32();
    nftContract.contractAddress = event.address;
    nftContract.total_transfers = BigInt.fromI32(0);
    nftContract.timestamp_added = event.block.timestamp.toI32();
    nftContract.templateType = "TRANSFERS_ERC721";
  }

  let transfer = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  transfer.transactionHash = event.transaction.hash.toHex();
  transfer.blockNumber = event.block.number.toI32();
  transfer.timestamp = event.block.timestamp.toI32()
  transfer.contractAddress = event.address.toHex();
  transfer.from = event.params.from
  transfer.to = event.params.to
  transfer.tokenId = event.params.tokenId

  nftContract.last_tx_hash = event.transaction.hash.toHex();
  nftContract.last_tx_timestamp = event.block.timestamp.toI32();
  nftContract.total_transfers = nftContract.total_transfers.plus(BigInt.fromI32(1));
  
  nftContract.save();
  transfer.save()
}