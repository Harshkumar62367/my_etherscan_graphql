const { RESTDataSource } = require("apollo-datasource-rest"); // Imports the RESTDataSource class from the apollo-datasource-rest package

// Vitalik's Ethereum address stored in a constant
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Custom EtherDataSource class that extends the RESTDataSource class
class EtherDataSource extends RESTDataSource {

  // Constructor sets the base URL for API requests
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Gets the ETH balance for the address stored in eth_address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets the total ETH supply
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets the latest ETH price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets the estimated block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

// Exports the EtherDataSource class
module.exports = EtherDataSource;