# Swapr contracts deployer

A helper repo that can be used to deploy Swapr-related contracts
(core/periphery/) to any given EVM-compatible network.

## Getting started

The project basically consists in a Hardhat task that performs the deployment
itself.

In order to use it, clone the repo on your local machine, install the
dependencies by launching

```
yarn
```

in the project's root, and create a `.env` file with the following structure:

```
PRIVATE_KEY="a private key"
```

This private key will be used to derive the account that will perform the
deployment, and that will ultimately be the owner of the platform's contracts.

## How to use

To actually trigger a deployiment, simply run:

```
yarn deploy
```

The following parameters are required for the command to work as expected:

- `--network`: specifies the network on which you want to perform the
  deployment. Valid values are listed in the `hardhat.config.js`.
- `--protocol-fee-receiver`: specifies the address that will receive the
  protocol fee.
- `--token-registry-address`: specifies the address at which the related token
  registry contract is currently deployed in the target network. Check
  [this link](https://github.com/nicoelzer/dxDAO-Token-Registry) out for more
  info.
- `--token-registry-list-id`: the unique identifier of the token list, registered
  in the previously passed token registry instance, that will be used by the
  staking contracts to perform input validation.
- `--weth-address`: an address at which a WETH-compatible contract is deployed in
  the targeted network.