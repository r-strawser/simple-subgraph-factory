import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { ContractAdded } from "../generated/Factory/Factory"

export function createContractAddedEvent(
  contractAddress: Address
): ContractAdded {
  let contractAddedEvent = changetype<ContractAdded>(newMockEvent())

  contractAddedEvent.parameters = new Array()

  contractAddedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return contractAddedEvent
}
