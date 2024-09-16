// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/LazyPanda.sol/LazyPanda.json");
require('dotenv').config()

const tokenAddress ="0x43dFCe3529247Ce4749147057dDc72AD1A7B845A"; // place your erc721a contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8f92bbe90b431F973bdD5cFE92953836Bf413826"; 
 // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
      const depositTx = await token.mint(5);
      // Wait for the deposit to be confirmed
      await depositTx.wait();
    console.log(" now Your Balance Is : " + await token.balanceOf(walletAddress) + " LazyPanda NFT'S");
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });