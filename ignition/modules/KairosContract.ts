// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const KairosContractModule = buildModule('KairosContractModule', (m) => {
    const kairosContract = m.contract('KairosContract');

    return { kairosContract };
});

export default KairosContractModule;