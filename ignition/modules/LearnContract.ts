// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const LearnContractModule = buildModule('LearnContractModule', (m) => {
    const learnContract = m.contract('LearnContract');

    return { learnContract };
});

export default LearnContractModule;