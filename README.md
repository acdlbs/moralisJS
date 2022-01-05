# Simple javascript moralis boilerplate project
# Notes
- Looks as if GetNFTTrades currently only works on the opensea marketplace
  - https://github.com/nft-api/nft-api#getnfttrades
# To run
```
git clone https://github.com/acdlbs/moralisJS.git
cd moralisJS
python -m http.server 8000 --bind 127.0.0.1
```
then navigate to http://127.0.0.1:8000/

# Example command in browser console
- await Moralis.Web3API.token.getNFTOwners({address: "0x495f947276749ce646f68ac8c248420045cb7b5e"})

# Docs
 - moralis NFT API
   - https://docs.moralis.io/moralis-server/web3-sdk/nft-api
 - opensea shared storefront
   - https://etherscan.io/token/0x495f947276749ce646f68ac8c248420045cb7b5e
   - contract
	 - 0x495f947276749ce646f68ac8c248420045cb7b5e
	 
