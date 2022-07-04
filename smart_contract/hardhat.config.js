//https://eth-goerli.g.alchemy.com/v2/xlJQvMF-aA8jZhGYbOAgJ4QDxSGiM2uI

require('@nomiclabs/hardhat-waffle');

module.exports  = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/xlJQvMF-aA8jZhGYbOAgJ4QDxSGiM2uI',
      accounts: ['2c337709b08a892f90cf0d3d5bf7bef67b8cbd345dbb47f9166b15593d342721']
    }
  }
}