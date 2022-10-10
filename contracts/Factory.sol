// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Factory {

    address[] public contracts;

    // initialization event
    event ContractAdded(address indexed contractAddress);

    function addContract(address nftContract) public {
        contracts.push(nftContract);
        // fire initialization event
        emit ContractAdded(nftContract);
    }
}
