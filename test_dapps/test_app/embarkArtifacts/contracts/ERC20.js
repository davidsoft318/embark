import EmbarkJS from '../embarkjs';
let ERC20JSONConfig = {"contract_name":{"file":"zeppelin-solidity/contracts/token/ERC20/ERC20.sol","className":"ERC20","args":[],"code":"","runtimeBytecode":"","realRuntimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abiDefinition":[{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],"filename":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol","originalFilename":"contracts//Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol","path":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/contracts/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/node_modules/zeppelin-solidity/contracts/token/ERC20/ERC20.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abi":[{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]};
let ERC20 = new EmbarkJS.Blockchain.Contract(ERC20JSONConfig);
export default ERC20;
