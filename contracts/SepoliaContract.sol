// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SepoliaContract {
    function getBalance(address _addr) public view returns (uint256) {
        return _addr.balance;
    }
}
