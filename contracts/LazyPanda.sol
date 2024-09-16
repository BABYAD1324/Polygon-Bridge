// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";


contract LazyPanda is ERC721A{

    address public owner;

    // maximum LazyPanda NFT can be minted
    uint256 public maxQuantity = 5;

    // panda nft url
    string baseUrl = "https://rose-academic-galliform-365.mypinata.cloud/ipfs/QmYiAmam6snYxqMpdC9CdK4F2mfAHK32Ehm9p5hbkG71yT/?pinataGatewayToken=BUvHdzqTAXLLKcHp2oqNjAYDR-lP70mMmWTleG7g7YAbQiipyxtjnf9WjMkT0afP";

    //  prompt description
    string public prompt =
        "Panda Eating Food";

    constructor() ERC721A( "LazyPanda", "Lp") {
        owner = msg.sender;
    }

    // Modifier for owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action.");
        _;
    }

    // Mint Panda
    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxQuantity ,"You cannot mint more than  5 NFT's or Lazy Panda's");
        _mint(msg.sender, quantity);
    }
    

    // Override the baseURI 
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    //  URL for the prompt description
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
