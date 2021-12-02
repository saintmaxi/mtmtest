// Ethers.js Implementation by 0xInuarashi, saintmaxi


/*********************************************************************************/
/********************************PRODUCTION CONFIG********************************/
/*********************************************************************************/

// const transpondersAddress = "";
// const transpondersAbi = () => {
//     return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTokensOfAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getTransponderStatus","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"mintTransponder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mtmAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setFontAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMTMAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenDescription_","type":"string"}],"name":"setTokenDescription","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenExternalUrl_","type":"string"}],"name":"setTokenExternalUrl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName_","type":"string"}],"name":"setTokenName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenExternalUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
// };

// const spaceCapsulesAddress = "";
// const spaceCapsulesAbi = () => {
//     return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontSize","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArms","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArtifact","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChest","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHead","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLegs","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getMoonBag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRing","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTokensOfAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getVehicle","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getWeapon","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setFontAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"string_","type":"string"}],"name":"setFontSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
// };

// const charactersAddress = "";
// const charactersAbi = () => {
//     return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "CC", "outputs": [ { "internalType": "contract iCC", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Metadata", "outputs": [ { "internalType": "contract iMetadata", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SCAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TPAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI_EXT", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "beamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "transponderIds_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsuleIds_", "type": "uint256[]" }, { "internalType": "uint8[]", "name": "renderTypes_", "type": "uint8[]" } ], "name": "multiBeamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "bytes_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "metadata_", "type": "address" }, { "internalType": "address", "name": "cc_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint256", "name": "uploadId_", "type": "uint256" } ], "name": "uploadCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" } ]';
// };

// const charactersControllerAddress = "";
// const charactersControllerAbi = () => {
//     return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Characters", "outputs": [ { "internalType": "contract iCharacters", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SC", "outputs": [ { "internalType": "contract IERC721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TP", "outputs": [ { "internalType": "contract IERC721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint256[]", "name": "charactersToBurn_", "type": "uint256[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "augmentCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint256[]", "name": "transponders_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsules_", "type": "uint256[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "augmentCharacterWithMats", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" } ], "name": "changeName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint16", "name": "type_", "type": "uint16" } ], "name": "changeRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" } ], "name": "getCharacterYieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "getTotalYieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelAgility", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelConstitution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelIntelligence", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelSpirit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelStrength", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint16", "name": "amount_", "type": "uint16" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" } ], "name": "rerollRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "characters_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" }, { "internalType": "uint8", "name": "item_", "type": "uint8" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "upgradeEquipment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "address", "name": "characterContract_", "type": "address" }, { "internalType": "uint256", "name": "uploadCharacterId_", "type": "uint256" } ], "name": "uploadRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]';
// };

// const MESAddress = "";
// const MESAbi = () => {
//     return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "to_", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "addCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateAdd_", "type": "uint256" } ], "name": "addYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToYieldInfo", "outputs": [ { "internalType": "uint40", "name": "yieldRate_", "type": "uint40" }, { "internalType": "uint176", "name": "pendingRewards_", "type": "uint176" }, { "internalType": "uint40", "name": "lastUpdatedTime_", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "deductCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getYieldRateOfAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalModulus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "from_", "type": "address[]" }, { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiUpdateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGetStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint40", "name": "yieldEndTime_", "type": "uint40" } ], "name": "setYieldEndTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRate_", "type": "uint256" } ], "name": "setYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateSub_", "type": "uint256" } ], "name": "subYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "updateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "yieldEndTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldStartTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" } ]';
// };

// const characterStorageAddress = "";
// const characterStorageAbi = () => {
// return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "characterMain", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "characters", "outputs": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "contractToRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "controllers", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "Character_", "type": "tuple" } ], "name": "createCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "equipments", "outputs": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getCharacter", "outputs": [ { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getEquipment", "outputs": [ { "components": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Equipment", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" } ], "name": "getRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getStats", "outputs": [ { "components": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Stats", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "names", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" } ], "name": "setAgility", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArmsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArtifactUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" } ], "name": "setAugments", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" } ], "name": "setBasePoints", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setCharacterMain", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setChestUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" } ], "name": "setConstitution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setContractToRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setHeadUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" } ], "name": "setIntelligence", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setLegsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" } ], "name": "setName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "setRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setRingUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" } ], "name": "setSpaceCapsuleId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "name": "setSpirit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "strength_", "type": "uint8" } ], "name": "setStrength", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "setTotalEquipmentBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" } ], "name": "setTransponderId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setVehicleUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setWeaponUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "stats", "outputs": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "stateMutability": "view", "type": "function" } ]`;
// };

// const etherscanBase = `https://etherscan.io/tx/`;

/*********************************************************************************/
/***********************************DEV CONFIG************************************/
/*********************************************************************************/

const transpondersAddress = "0xEBAE15CdB94787C548A1Ff093F63DfDc53EcBC7c";
const transpondersAbi = () => {
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTokensOfAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getTransponderStatus","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"mintTransponder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mtmAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setFontAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMTMAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenDescription_","type":"string"}],"name":"setTokenDescription","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenExternalUrl_","type":"string"}],"name":"setTokenExternalUrl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName_","type":"string"}],"name":"setTokenName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenExternalUrl","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};

const spaceCapsulesAddress = "0x0B34c30E125d40a585F2C4524394d31591330196";
const spaceCapsulesAbi = () => {
    return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fontSize","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArms","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getArtifact","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getChest","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getHead","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getLegs","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to_","type":"address"},{"internalType":"uint256","name":"tokenId_","type":"uint256"}],"name":"getMoonBag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRing","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"getTokensOfAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getVehicle","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getWeapon","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setFontAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"string_","type":"string"}],"name":"setFontSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"address_","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};

const charactersAddress = "0x55a695F86b054dD035a16257aF21C1793d25B6b5";
const charactersAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "CC", "outputs": [ { "internalType": "contract iCC", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Metadata", "outputs": [ { "internalType": "contract iMetadata", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SCAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TPAddress", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseTokenURI_EXT", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "beamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256[]", "name": "transponderIds_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsuleIds_", "type": "uint256[]" }, { "internalType": "uint8[]", "name": "renderTypes_", "type": "uint8[]" } ], "name": "multiBeamCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" }, { "internalType": "bytes", "name": "data_", "type": "bytes" } ], "name": "multiSafeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256[]", "name": "tokenIds_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "bytes", "name": "bytes_", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator_", "type": "address" }, { "internalType": "bool", "name": "approved_", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "metadata_", "type": "address" }, { "internalType": "address", "name": "cc_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId_", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "transponderId_", "type": "uint256" }, { "internalType": "uint256", "name": "spaceCapsuleId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint256", "name": "uploadId_", "type": "uint256" } ], "name": "uploadCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" } ]';
};

const charactersControllerAddress = "0x121F260a117d5B73faebf60b66A6e16e6ACF03F5";
const charactersControllerAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "CS", "outputs": [ { "internalType": "contract iCS", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "Characters", "outputs": [ { "internalType": "contract iCharacters", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MES", "outputs": [ { "internalType": "contract iMES", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SC", "outputs": [ { "internalType": "contract IERC721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TP", "outputs": [ { "internalType": "contract IERC721", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint256[]", "name": "charactersToBurn_", "type": "uint256[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "augmentCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint256[]", "name": "transponders_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "spaceCapsules_", "type": "uint256[]" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "augmentCharacterWithMats", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" } ], "name": "changeName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint16", "name": "type_", "type": "uint16" } ], "name": "changeRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" } ], "name": "getCharacterYieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "getTotalYieldRate", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelAgility", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelConstitution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelIntelligence", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelSpirit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" } ], "name": "levelStrength", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint16", "name": "amount_", "type": "uint16" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "levelUp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" } ], "name": "rerollRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "characters_", "type": "address" }, { "internalType": "address", "name": "mes_", "type": "address" }, { "internalType": "address", "name": "cs_", "type": "address" }, { "internalType": "address", "name": "sc_", "type": "address" }, { "internalType": "address", "name": "tp_", "type": "address" } ], "name": "setContracts", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "uint8", "name": "amount_", "type": "uint8" }, { "internalType": "uint8", "name": "item_", "type": "uint8" }, { "internalType": "bool", "name": "useCredits_", "type": "bool" } ], "name": "upgradeEquipment", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "characterId_", "type": "uint256" }, { "internalType": "address", "name": "characterContract_", "type": "address" }, { "internalType": "uint256", "name": "uploadCharacterId_", "type": "uint256" } ], "name": "uploadRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ]';
};

const MESAddress = "0x855225b00b232313719B8f34EDA67456B6d93d16";
const MESAbi = () => {
    return '[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "to_", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "Claim", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "addCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateAdd_", "type": "uint256" } ], "name": "addYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "addressToYieldInfo", "outputs": [ { "internalType": "uint40", "name": "yieldRate_", "type": "uint40" }, { "internalType": "uint176", "name": "pendingRewards_", "type": "uint176" }, { "internalType": "uint40", "name": "lastUpdatedTime_", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "claimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "deductCredits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "getYieldRateOfAddress", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalModulus", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiClaimTokensWithoutUpdatingBalances", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "from_", "type": "address[]" }, { "internalType": "address[]", "name": "to_", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts_", "type": "uint256[]" } ], "name": "multiTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "addresses_", "type": "address[]" } ], "name": "multiUpdateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGPendingClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGTotalClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "rawGetStorageClaimableTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint40", "name": "yieldEndTime_", "type": "uint40" } ], "name": "setYieldEndTime", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRate_", "type": "uint256" } ], "name": "setYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "uint256", "name": "yieldRateSub_", "type": "uint256" } ], "name": "subYieldRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from_", "type": "address" }, { "internalType": "address", "name": "to_", "type": "address" }, { "internalType": "uint256", "name": "amount_", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "updateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "yieldEndTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "yieldStartTime", "outputs": [ { "internalType": "uint40", "name": "", "type": "uint40" } ], "stateMutability": "view", "type": "function" } ]';
};

const characterStorageAddress = "0xf682A03E089c183a0C7c14CF626F9A77E390105D";
const characterStorageAbi = () => {
    return `[ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "characterMain", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "characters", "outputs": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "contractToRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "controllers", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "Character_", "type": "tuple" } ], "name": "createCharacter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "equipments", "outputs": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getCharacter", "outputs": [ { "components": [ { "internalType": "uint8", "name": "race_", "type": "uint8" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "internalType": "struct MTMCharacterStorage.Character", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getEquipment", "outputs": [ { "components": [ { "internalType": "uint8", "name": "weaponUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "chestUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "headUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "legsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "vehicleUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "armsUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "artifactUpgrades_", "type": "uint8" }, { "internalType": "uint8", "name": "ringUpgrades_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Equipment", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" } ], "name": "getRace", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" } ], "name": "getStats", "outputs": [ { "components": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "internalType": "struct MTMCharacterStorage.Stats", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "names", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" } ], "name": "setAgility", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArmsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setArtifactUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "augments_", "type": "uint8" } ], "name": "setAugments", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "basePoints_", "type": "uint16" } ], "name": "setBasePoints", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setCharacterMain", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setChestUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" } ], "name": "setConstitution", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "contractAddress_", "type": "address" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setContractToRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" }, { "internalType": "bool", "name": "bool_", "type": "bool" } ], "name": "setController", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setHeadUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" } ], "name": "setIntelligence", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setLegsUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "string", "name": "name_", "type": "string" } ], "name": "setName", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "address_", "type": "address" } ], "name": "setNewOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "race_", "type": "uint8" } ], "name": "setRace", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "renderType_", "type": "uint8" } ], "name": "setRenderType", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setRingUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "spaceCapsuleId_", "type": "uint16" } ], "name": "setSpaceCapsuleId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "name": "setSpirit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "strength_", "type": "uint8" } ], "name": "setStrength", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "totalEquipmentBonus_", "type": "uint16" } ], "name": "setTotalEquipmentBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint16", "name": "transponderId_", "type": "uint16" } ], "name": "setTransponderId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setVehicleUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }, { "internalType": "uint8", "name": "upgrade_", "type": "uint8" } ], "name": "setWeaponUpgrades", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "stats", "outputs": [ { "internalType": "uint8", "name": "strength_", "type": "uint8" }, { "internalType": "uint8", "name": "agility_", "type": "uint8" }, { "internalType": "uint8", "name": "constitution_", "type": "uint8" }, { "internalType": "uint8", "name": "intelligence_", "type": "uint8" }, { "internalType": "uint8", "name": "spirit_", "type": "uint8" } ], "stateMutability": "view", "type": "function" } ]`;
};

const etherscanBase = `https://rinkeby.etherscan.io/tx/`;

/*********************************END CONFIG************************************/

// Initiate Provider 
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();

// Initiate Contracts
const transponders = new ethers.Contract(transpondersAddress, transpondersAbi(), signer);
const spaceCapsules = new ethers.Contract(spaceCapsulesAddress, spaceCapsulesAbi(), signer);
const characters = new ethers.Contract(charactersAddress, charactersAbi(), signer);
const charactersController = new ethers.Contract(charactersControllerAddress, charactersControllerAbi(), signer);
const MES = new ethers.Contract(MESAddress, MESAbi(), signer);
const characterStorage = new ethers.Contract(characterStorageAddress, characterStorageAbi(), signer);

// General Functions
const connect = async() => { await provider.send("eth_requestAccounts", []) };
const getAddress = async() => { try { return await signer.getAddress(); } catch { return false; }}; 
const formatEther = (balance_) => { return ethers.utils.formatEther(balance_) }; // divides by 18 modulus
const parseEther = (eth_) => { return ethers.utils.parseEther(eth_) }; // multiplies by 18 modulus
const getChainId = async() => { return await signer.getChainId() };

// General Variables
const maxInt = "115792089237316195423570985008687907853269984665640564039457584007913129639934";

// Approval Functions

const approveTPToCharacters = async() => {
    await transponders.setApprovalForAll(charactersAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveTPToCharControl = async() => {
    await transponders.setApprovalForAll(charactersControllerAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveSCToCharacters = async() => {
    await spaceCapsules.setApprovalForAll(charactersAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveSCToCharControl = async() => {
    await spaceCapsules.setApprovalForAll(charactersControllerAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const approveCharsToCharControl = async() => {
    await characters.setApprovalForAll(charactersControllerAddress, true).then ( async (tx_) => {
        await waitForTransaction(tx_);
    });
};

const checkApprovals = async() => {
    const owner = await getAddress();
    if (await transponders.isApprovedForAll(owner, charactersAddress)) {
        $("#tp-to-chars-approval").addClass("hidden");
    }
    else {
        $("#tp-to-chars-approval").removeClass("hidden");
    }
    if (await transponders.isApprovedForAll(owner, charactersControllerAddress)) {
        $("#tp-to-chars-control-approval").addClass("hidden");
    }
    else {
        $("#tp-to-chars-control-approval").removeClass("hidden");
    }
    if (await spaceCapsules.isApprovedForAll(owner, charactersAddress)) {
        $("#sc-to-chars-approval").addClass("hidden");
    }
    else {
        $("#sc-to-chars-approval").removeClass("hidden");
    }
    if (await spaceCapsules.isApprovedForAll(owner, charactersControllerAddress)) {
        $("#sc-to-chars-control-approval").addClass("hidden");
    }
    else {
        $("#sc-to-chars-control-approval").removeClass("hidden");
    }
    if (await characters.isApprovedForAll(owner, charactersControllerAddress)) {
        $("#chars-to-chars-control-approval").addClass("hidden");
    }
    else {
        $("#chars-to-chars-control-approval").removeClass("hidden");
    }
};

const getTranspondersOfAddress = async(address_) => {
    const yourTransponders = await transponders.getTokensOfAddress(address_);
    if (yourTransponders.length == 0) {
        return "None";
    }
    else {
        const sortedTransponders = [...yourTransponders].sort((a, b) => a - b);
        let sortedTranspondersJSX = "";
        for (let i = 0; i < sortedTransponders.length; i++) {
            let transponderID = Number(sortedTransponders[i]);
            sortedTranspondersJSX += `<span class="clickable" onclick="displayTransponder(${transponderID})">${transponderID} </span>`
        }
        return sortedTranspondersJSX;
    }
};

const getSpaceCapsulesOfAddress = async(address_) => {
    const yourCapsules = await spaceCapsules.getTokensOfAddress(address_);
    if (yourCapsules.length == 0) {
        return "None";
    }
    else {
        const sortedCapsules = [...yourCapsules].sort((a, b) => a - b);
        let sortedCapsulesJSX = "";
        for (let i = 0; i < sortedCapsules.length; i++) {
            let capsuleID = Number(sortedCapsules[i]);
            sortedCapsulesJSX += `<span class="clickable" onclick="displayCapsule(${capsuleID})">${capsuleID} </span>`
        }
        return sortedCapsulesJSX;
    }
};

const getCharactersOfAddress = async(address_) => {
    const yourCharacters = await characters.walletOfOwner(address_);
    if (yourCharacters.length == 0) {
        return "None";
    }
    else {
        const sortedCharacters = [...yourCharacters].sort((a, b) => a - b);
        let sortedCharactersJSX = "";
        for (let i = 0; i < sortedCharacters.length; i++) {
            let charID = Number(sortedCharacters[i]);
            sortedCharactersJSX += `<span class="clickable" onclick="displayCharacter(${charID})">${charID} </span>`
        }
        return sortedCharactersJSX;
    }
};

const getMESBalance = async(address_) => {
    return formatEther( (await MES.balanceOf(address_)) );
};

const getMESCredits = async(address_) => {
    return formatEther( (await MES.getTotalClaimableTokens(address_)) );
};

const getMESYieldRate = async(address_) => {
    return formatEther( (await MES.getYieldRateOfAddress(address_)) );
};

const claimMEScredits = async() => {
    const user = await getAddress();
    if ((await getMESCredits(user)) == 0) {
        await displayErrorMessage("Error; No $MES credits to claim!");
    }
    else {
        await MES.claimTokens(user).then( async(tx_) => {
            await waitForTransaction(tx_);
        });
    }
}

const beamCharacter = async() => {
    const transpondersInput = $("#beam-transponder-ids").val();
    const transpondersArray = transpondersInput.split(",");
    const capsulesInput = $("#beam-capsule-ids").val();
    const capsulesArray = capsulesInput.split(",");

    if (!transpondersInput || !capsulesInput) return;

    const _beamCharacter = async() => {
        if (transpondersArray.length !== capsulesArray.length) {
            await displayErrorMessage('Error: Beaming requires equal number of transponders and capsules.')
        }
        else {
            try {
                if (transpondersArray.length == 1) {
                    const renderType = 1;
                    await characters.beamCharacter(transpondersArray[0], capsulesArray[0], renderType).then( async(tx_) => {
                        await waitForTransaction(tx_);
                    });
                }
                else if (transpondersArray.length > 1) {
                    const renderTypes = Array(transpondersArray.length).fill(1);
                    await characters.multiBeamCharacter(transpondersArray, capsulesArray, renderTypes).then( async(tx_) => {
                        await waitForTransaction(tx_);
                    });
                }
            }
            catch (error) {
                if ((error.message).includes("Unowned") || (error.message).includes("owner query for nonexistent token")) {
                    await displayErrorMessage(`Error: You must own the specified transponders and capsules!`)
                }
                else if ((error.message).includes("not owner nor approved")) {
                    await displayErrorMessage(`Error: Approve Transponders and Capsules to Characters!`)
                }
                else {
                    console.log(error);
                }
            }
        }
    }


    // tx chaining i think this should work
    if ( !(await spaceCapsules.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        console.log("space capsules not approved: requesting approval!");
        await spaceCapsules.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 

            provider.once(tx_.hash, async(tx__) => {
                console.log("space capsules approved! checking transponders approval!");
                if ( !(await transponders.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
                    console.log("transponders not approved: requesting approval!");
                    await transponders.setApprovalForAll(charactersControllerAddress, true)
                    .then( async(tx_) => { 

                        provider.once(tx_.hash, async(tx__) => {
                            console.log("transponders approved! now augmenting with mats");
                            _beamCharacter(); 
                        });
                    })
                }
            });
        })
    } 
    else if ( !(await transponders.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        console.log("transponders not approved: requesting approval!");
        await transponders.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 
            provider.once(tx_.hash, async(tx__) => {
                console.log("transponders approved! now augmenting with mats");
                _beamCharacter(); 
            });
        })
    }
    else {
        console.log("transponders and capsules approved! now augmenting with mats");
        _beamCharacter(); 
    };
};

const uploadCharacter = async() => {
    const transponderID = $("#upload-transponder-id").val();
    const capsuleID = $("#upload-capsule-id").val();
    const renderType = 1;
    const contractAddress = $("#upload-char-type option:selected").val();
    const uploadID = $("#upload-character-id").val();


    const _uploadCharacter = async() => {
        if (!transponderID || !capsuleID || !contractAddress || !uploadID) {
            await displayErrorMessage("Error: Enter all required fields.")
        }
        else {
            try {
                await characters.uploadCharacter(transponderID, capsuleID, renderType, contractAddress, uploadID).then( async(tx_) => {
                    await waitForTransaction(tx_);
                });
            }
            catch (error) {
                if ((error.message).includes("Unowned") || (error.message).includes("owner query for nonexistent token") || (error.message).includes("You don't own this character")) {
                    await displayErrorMessage(`Error: You must own the specified transponder, capsule, and character!`)
                }
                else if ((error.message).includes("not owner nor approved")) {
                    await displayErrorMessage(`Error: Approve Transponders and Capsules to Characters!`)
                }
                else {
                    console.log(error);
                }
            }
        }
    }


    // tx chaining i think this should work
    if ( !(await spaceCapsules.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        console.log("space capsules not approved: requesting approval!");
        await spaceCapsules.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 

            provider.once(tx_.hash, async(tx__) => {
                console.log("space capsules approved! checking transponders approval!");
                if ( !(await transponders.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
                    console.log("transponders not approved: requesting approval!");
                    await transponders.setApprovalForAll(charactersControllerAddress, true)
                    .then( async(tx_) => { 

                        provider.once(tx_.hash, async(tx__) => {
                            console.log("transponders approved! now augmenting with mats");
                            _uploadCharacter(); 
                        });
                    })
                }
            });
        })
    } 
    else if ( !(await transponders.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        console.log("transponders not approved: requesting approval!");
        await transponders.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 
            provider.once(tx_.hash, async(tx__) => {
                console.log("transponders approved! now augmenting with mats");
                _uploadCharacter(); 
            });
        })
    }
    else {
        console.log("transponders and capsules approved! now augmenting with mats");
        _uploadCharacter(); 
    };
};

const augmentCharacter = async() => {
    const characterID = $("#augment-char").val();
    const charsToBurnInput = $("#augment-burn-chars").val();
    const charsToBurnArray = charsToBurnInput.split(",");
    const useCredits = $("#augment-wc-use-credits option:selected").val() === "Yes" ? true : false;

    const _augmentCharacter = async() => {
        if (!characterID) {
            await displayErrorMessage("Error: Select a character to augment.")
        }
        else if (!charsToBurnInput) {
            await displayErrorMessage("Error: Select character(s) to burn.")
        }
        else if (charsToBurnArray.includes(characterID)) {
            await displayErrorMessage(`Error: Character ${characterID} cannot be both augmented and burned!`);
        }
        else {
            try {
                await charactersController.augmentCharacter(characterID, charsToBurnArray, useCredits).then( async(tx_) => {
                    await waitForTransaction(tx_);
                });
            }
            catch (error) {
                if ((error.message).includes("Unowned") || (error.message).includes("owner query for nonexistent token")) {
                    await displayErrorMessage(`Error: Cannot burn unowned characters!`)
                }
                else if ((error.message).includes("TNCOA")) {
                    await displayErrorMessage(`Error: Approve Characters to Character Controller!`)
                }
                else if ((error.message).includes("Not enough MES credits")) {
                    await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
                }
                else if ((error.message).includes("Not enough MES to")) {
                    await displayErrorMessage(`Error: Insufficient $MES for action!`);
                }
                else {
                    window.alert(error);
                    console.log(error);
                }
            }
        }
    }

    // Hi saint this is the method in ethers to chain TX and let things happen after the TX is confirmed.
    if ( !(await characters.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        console.log("characters not approved: requesting approval!");
        await characters.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 
            provider.once(tx_.hash, async(tx__) => {
                console.log("characters approved! now augmenting");
                _augmentCharacter(); 
            });
        })
        .catch( (err_) => { window.alert(err_); });
    } else {
        console.log("characters already approved! now augmenting");
        _augmentCharacter();
    };
};

const augmentCharacterWithMaterials = async() => {
    const characterID = $("#augment-mats-char").val();
    const transpondersInput = $("#augment-transponders").val();
    const transpondersArray = transpondersInput.split(",");
    const capsulesInput = $("#augment-capsules").val();
    const capsulesArray = capsulesInput.split(",");
    const useCredits = $("#augment-wm-use-credits option:selected").val() === "Yes" ? true : false;

    const _augmentCharacterWithMaterials = async() => {
        if (!characterID || !transpondersInput || !capsulesInput) {
            await displayErrorMessage("Error: Enter all required fields.")
        }
        else {
            if (transpondersArray.length !== capsulesArray.length) {
                await displayErrorMessage('Error: Augmenting requires equal number of transponders and capsules.')
            }
            else {
                try {
                    await charactersController.augmentCharacterWithMats(characterID, transpondersArray, capsulesArray, useCredits).then( async(tx_) => {
                        await waitForTransaction(tx_)
                    });
                }
                catch (error) {
                    if ((error.message).includes("Not owner") || (error.message).includes("owner query for nonexistent token")) {
                        await displayErrorMessage(`Error: You must own the specified transponders and capsules!`)
                    }
                    else if ((error.message).includes("not owner nor approved")) {
                        await displayErrorMessage(`Error: Approve Transponders and Capsules to Character Controller!`)
                    }
                    else if ((error.message).includes("Not enough MES credits")) {
                        await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
                    }
                    else if ((error.message).includes("Not enough MES to")) {
                        await displayErrorMessage(`Error: Insufficient $MES for action!`);
                    }
                    else {
                        console.log(error);
                    }
                }
            }
        }
    };

    // tx chaining i think this should work
    if ( !(await spaceCapsules.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        console.log("space capsules not approved: requesting approval!");
        await spaceCapsules.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 

            provider.once(tx_.hash, async(tx__) => {
                console.log("space capsules approved! checking transponders approval!");
                if ( !(await transponders.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
                    console.log("transponders not approved: requesting approval!");
                    await transponders.setApprovalForAll(charactersControllerAddress, true)
                    .then( async(tx_) => { 

                        provider.once(tx_.hash, async(tx__) => {
                            console.log("transponders approved! now augmenting with mats");
                            _augmentCharacterWithMaterials(); 
                        });
                    })
                }
            });
        })
    } 
    else if ( !(await transponders.isApprovedForAll((await getAddress()), charactersControllerAddress)) ) {
        console.log("transponders not approved: requesting approval!");
        await transponders.setApprovalForAll(charactersControllerAddress, true)
        .then( async(tx_) => { 
            provider.once(tx_.hash, async(tx__) => {
                console.log("transponders approved! now augmenting with mats");
                _augmentCharacterWithMaterials(); 
            });
        })
    }
    else {
        console.log("transponders and capsules approved! now augmenting with mats");
        _augmentCharacterWithMaterials(); 
    };
};

const levelUpBasePoints = async() => {
    const characterID = $("#level-up-char").val();
    const amount = Number($("#level-up-amount").val());
    const useCredits = $("#level-up-use-credits option:selected").val() === "Yes" ? true : false;
    
    if (!characterID || !amount) {
        await displayErrorMessage("Error: Enter all required fields.")
    }
    else {
        try {
            await charactersController.levelUp(characterID, amount, useCredits).then( async(tx_) => {
                await waitForTransaction(tx_)
            });
        }
        catch (error) {
            if ((error.message).includes("Invalid Level")) {
                await displayErrorMessage(`Error: Level up cannot exceed max base points (50) for character!`);
            }
            else if ((error.message).includes("Not enough MES credits")) {
                await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
            }
            else if ((error.message).includes("Not enough MES to")) {
                await displayErrorMessage(`Error: Insufficient $MES for action!`);
            }
            else {
                console.log(error);
            }
        }

    }
};

const upgradeEquipment = async() => {
    const characterID = $("#upgrade-char").val();
    const amount = Number($("#upgrade-eq-amount").val());
    const item = Number($("#upgrade-eq-type").val());
    const useCredits = $("#equipment-use-credits option:selected").val() === "Yes" ? true : false;

    if (!characterID || !amount || !item) {
        await displayErrorMessage("Error: Enter all required fields.")
    }
    else {
        try {
            await charactersController.upgradeEquipment(characterID, amount, item, useCredits).then( async(tx_) => {
                await waitForTransaction(tx_)
            });
        }
        catch (error) {
            if ((error.message).includes("past upgradability")) {
                await displayErrorMessage(`Error: Upgrade cannot exceed max level (4) for equipment!`);
            }
            else if ((error.message).includes("Not enough MES credits")) {
                await displayErrorMessage(`Error: Insufficient $MES credits for action!`);
            }
            else if ((error.message).includes("Not enough MES to")) {
                await displayErrorMessage(`Error: Insufficient $MES for action!`);
            }
            else {
                console.log(error);
            }
        }

    }
};

// Processing txs

// After Tx Hook
const waitForTransaction = async(tx_) => {
    startLoading(tx_);
    provider.once(tx_.hash, async (transaction_) => {
        await endLoading(tx_, transaction_.status);
    });
};

// Resuming UI display, refreshing market for pending txs across pages
var pendingTransactions = localStorage.getItem("MTMpendingTxs");

if (!pendingTransactions) {
    pendingTransactions = new Set();
}
else {
    pendingTransactions = new Set(Array.from(JSON.parse(pendingTransactions)));
    pendingTxArray = Array.from(pendingTransactions);
    pendingTransactions = new Set();

    for (let i =0; i < pendingTxArray.length; i++) {
        waitForTransaction(pendingTxArray[i]);
    }
    localStorage.removeItem("MTMpendingTxs");
}

function cachePendingTransactions() {
    localStorage.setItem("MTMpendingTxs", JSON.stringify(Array.from(pendingTransactions)));
}

function startLoading(tx) {
    let txHash = tx.hash;
    const etherscanLink = `${etherscanBase}${txHash}`;
    const loadingDiv = `<a href="${etherscanLink}" class="etherscan-link" id="etherscan-link-${txHash}" target="_blank" rel="noopener noreferrer"><div class="loading-div" id="loading-div-${txHash}">PROCESSING<span class="one">.</span><span class="two">.</span><span class="three">.</span><br>CLICK FOR ETHERSCAN</div></a><br>`;
    $("#pending-transactions").append(loadingDiv);

    pendingTransactions.add(tx);
}

async function endLoading(tx, txStatus) {
    let txHash = tx.hash;
    $(`#loading-div-${txHash}`).html("");
    let status = txStatus == 1 ? "SUCCESS" : "ERROR";
    $(`#loading-div-${txHash}`).append(`TRANSACTION ${status}.<br>VIEW ON ETHERSCAN.`);
    await sleep(2000);
    $(`#etherscan-link-${txHash}`).remove();
    pendingTransactions.delete(tx);
    if (pendingTransactions.size == 0) {
        await updateInfo();
        await loadCharacterSelect();
    }
}

// Workers
const updateInfo = async() => {
    await checkApprovals();
    const _address = !(await getAddress()) ? "Connect Wallet!" : (await getAddress());
    $("#account").text(`${_address.substr(0,9)}...`);
    
    if (_address === "Connect Wallet!") return;

    $("#your-yield-rate").html(`${await getMESYieldRate(_address)} <img src="./images/mes.png" width="30px">`);
    $("#your-mes").html(`${await getMESBalance(_address)} <img src="./images/mes.png" width="30px">`);
    $("#your-mes-credits").html(`${await getMESCredits(_address)} <img src="./images/mes.png" width="30px"><div style="height:5px" class="hide-on-desktop"></div><span onclick="claimMEScredits()">CLAIM</span>`);
    $("#your-transponders").html( (await getTranspondersOfAddress(_address)) );
    $("#your-space-capsules").html( (await getSpaceCapsulesOfAddress(_address)) );
    $("#your-characters").html( (await getCharactersOfAddress(_address)) );
};

setInterval( async() => {
    await updateInfo();
}, 5000)

ethereum.on("accountsChanged", async (accounts_) => { 
    await updateInfo();
    location.reload();
});

window.onload = async() => {
    await updateInfo();
    await loadCharacterSelect();
};

window.onunload = async()=>{
    cachePendingTransactions();
}