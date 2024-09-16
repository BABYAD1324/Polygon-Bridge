
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/LazyPanda.sol/LazyPanda.json");

const tokenAddress = "0x448AcA4Ae42F3441c122E6e0d3ec9b3C0E88bE80"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8f92bbe90b431F973bdD5cFE92953836Bf413826";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("Your Balance Is :" + await token.balanceOf(walletAddress) + " Lazy Panda's NFT'S");
  }
  
 
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });