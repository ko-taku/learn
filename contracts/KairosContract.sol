// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract KairosContract {
    struct User {
        string name;
        uint256 age;
        uint256 balance;
    }

    mapping(address => User) public users;

    function setUser(
        string memory _name,
        uint256 _age,
        uint256 _balance
    ) public {
        users[msg.sender] = User(_name, _age, _balance);
    }

    function getUser(
        address _addr
    ) public view returns (string memory, uint256, uint256) {
        return (users[_addr].name, users[_addr].age, users[_addr].balance);
    }
}
