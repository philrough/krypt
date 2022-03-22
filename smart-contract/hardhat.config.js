// https://eth-ropsten.alchemyapi.io/v2/4OOYmZJy6EPba1GOyujNVItRbicMqYwG
// https://eth-rinkeby.alchemyapi.io/v2/CPltaavz-EvaurL4EmmXbtrbrovVR-Jn
// https://eth-kovan.alchemyapi.io/v2/CPltaavz-EvaurL4EmmXbtrbrovVR-Jn

require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ganache');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/4OOYmZJy6EPba1GOyujNVItRbicMqYwG',
      accounts: [ '9a2a64f7581c2d55389371a9c40e6616f4fc0cf73f220f53b5186e55f2d24fb0' ]
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/CPltaavz-EvaurL4EmmXbtrbrovVR-Jn',
      accounts: [ '9a2a64f7581c2d55389371a9c40e6616f4fc0cf73f220f53b5186e55f2d24fb0' ]
    },
    kovan: {
      url: 'https://eth-kovan.alchemyapi.io/v2/CPltaavz-EvaurL4EmmXbtrbrovVR-Jn',
      accounts: [ '9a2a64f7581c2d55389371a9c40e6616f4fc0cf73f220f53b5186e55f2d24fb0' ]
    }
  }
}