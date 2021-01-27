require("dotenv").config();

require("@nomiclabs/hardhat-truffle5");
require("./tasks/deploy");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        arbitrumTestnetV3: {
            url: "https://kovan3.arbitrum.io/rpc",
            accounts: [process.env.PRIVATE_KEY],
            gasPrice: 0,
            gas: 1000000000,
            timeout: 100000
        }
    }
};
