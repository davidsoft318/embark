import EmbarkJS from '../embarkjs';
let AlreadyDeployedTokenJSONConfig = {"contract_name":{"address":"0xece374063fe5cc7efbaca0a498477cada94e5ad6","instanceOf":"Token","className":"AlreadyDeployedToken","args":[1000],"deploy":true,"path":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/contracts/token.sol","originalFilename":"contracts/token.sol","filename":"/Users/iurimatias/Projects/Status/embark/test_dapps/test_app/.embark/contracts/token.sol","code":"608060405234801561001057600080fd5b506040516020806104ac8339810160409081529051336000908152602081905291909120819055600255610463806100496000396000f30060806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806315945790146100ca57806318160ddd146100f157806323b872dd1461010657806370a0823114610130578063856c71dd14610151578063a9059cbb14610166578063dd62ed3e1461018a575b600080fd5b34801561009e57600080fd5b506100b6600160a060020a03600435166024356101b1565b604080519115158252519081900360200190f35b3480156100d657600080fd5b506100df610217565b60408051918252519081900360200190f35b3480156100fd57600080fd5b506100df61021d565b34801561011257600080fd5b506100b6600160a060020a0360043581169060243516604435610223565b34801561013c57600080fd5b506100df600160a060020a036004351661032f565b34801561015d57600080fd5b506100b661034a565b34801561017257600080fd5b506100b6600160a060020a036004351660243561034f565b34801561019657600080fd5b506100df600160a060020a0360043581169060243516610405565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025481565b60025490565b600160a060020a03831660009081526020819052604081205482111561024857600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561027857600080fd5b600160a060020a03831660009081526020819052604090205461029b9083610430565b15156102a657600080fd5b600160a060020a03808516600081815260016020908152604080832033845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600090565b3360009081526020819052604081205482111561036b57600080fd5b600160a060020a03831660009081526020819052604090205461038e9083610430565b151561039957600080fd5b3360008181526020818152604080832080548790039055600160a060020a03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b81011015905600a165627a7a723058207252a0032006eacf49b8acd5b3c0ab64152b74d1444aa37ac7d9120bbcc7fc680029","runtimeBytecode":"60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806315945790146100ca57806318160ddd146100f157806323b872dd1461010657806370a0823114610130578063856c71dd14610151578063a9059cbb14610166578063dd62ed3e1461018a575b600080fd5b34801561009e57600080fd5b506100b6600160a060020a03600435166024356101b1565b604080519115158252519081900360200190f35b3480156100d657600080fd5b506100df610217565b60408051918252519081900360200190f35b3480156100fd57600080fd5b506100df61021d565b34801561011257600080fd5b506100b6600160a060020a0360043581169060243516604435610223565b34801561013c57600080fd5b506100df600160a060020a036004351661032f565b34801561015d57600080fd5b506100b661034a565b34801561017257600080fd5b506100b6600160a060020a036004351660243561034f565b34801561019657600080fd5b506100df600160a060020a0360043581169060243516610405565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025481565b60025490565b600160a060020a03831660009081526020819052604081205482111561024857600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561027857600080fd5b600160a060020a03831660009081526020819052604090205461029b9083610430565b15156102a657600080fd5b600160a060020a03808516600081815260016020908152604080832033845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600090565b3360009081526020819052604081205482111561036b57600080fd5b600160a060020a03831660009081526020819052604090205461038e9083610430565b151561039957600080fd5b3360008181526020818152604080832080548790039055600160a060020a03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b81011015905600a165627a7a723058207252a0032006eacf49b8acd5b3c0ab64152b74d1444aa37ac7d9120bbcc7fc680029","realRuntimeBytecode":"60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806315945790146100ca57806318160ddd146100f157806323b872dd1461010657806370a0823114610130578063856c71dd14610151578063a9059cbb14610166578063dd62ed3e1461018a575b600080fd5b34801561009e57600080fd5b506100b6600160a060020a03600435166024356101b1565b604080519115158252519081900360200190f35b3480156100d657600080fd5b506100df610217565b60408051918252519081900360200190f35b3480156100fd57600080fd5b506100df61021d565b34801561011257600080fd5b506100b6600160a060020a0360043581169060243516604435610223565b34801561013c57600080fd5b506100df600160a060020a036004351661032f565b34801561015d57600080fd5b506100b661034a565b34801561017257600080fd5b506100b6600160a060020a036004351660243561034f565b34801561019657600080fd5b506100df600160a060020a0360043581169060243516610405565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025481565b60025490565b600160a060020a03831660009081526020819052604081205482111561024857600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561027857600080fd5b600160a060020a03831660009081526020819052604090205461029b9083610430565b15156102a657600080fd5b600160a060020a03808516600081815260016020908152604080832033845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600090565b3360009081526020819052604081205482111561036b57600080fd5b600160a060020a03831660009081526020819052604090205461038e9083610430565b151561039957600080fd5b3360008181526020818152604080832080548790039055600160a060020a03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b81011015905600a165627a7a72305820","gasEstimates":{"creation":{"codeDepositCost":"224600","executionCost":"40403","totalCost":"265003"},"external":{"_supply()":"406","allowance(address,address)":"862","approve(address,uint256)":"22332","balanceOf(address)":"697","isAvailable()":"300","totalSupply()":"428","transfer(address,uint256)":"43588","transferFrom(address,address,uint256)":"64409"},"internal":{"safeToAdd(uint256,uint256)":"24"}},"functionHashes":{"_supply()":"15945790","allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","isAvailable()":"856c71dd","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abiDefinition":[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"ok","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"_supply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x15945790"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"supply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"ok","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":true,"inputs":[],"name":"isAvailable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x856c71dd"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"ok","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"_allowance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"inputs":[{"name":"initial_balance","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}],"linkReferences":{},"gas":"auto","type":"instance","_gasLimit":6000000,"error":false,"deploymentAccount":"0xB8D851486d1C953e31A44374ACa11151D49B8bb3","realArgs":[1000],"deployedAddress":"0xece374063fe5cc7efbaca0a498477cada94e5ad6"},"address":"0xece374063fe5cc7efbaca0a498477cada94e5ad6","code":"608060405234801561001057600080fd5b506040516020806104ac8339810160409081529051336000908152602081905291909120819055600255610463806100496000396000f30060806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806315945790146100ca57806318160ddd146100f157806323b872dd1461010657806370a0823114610130578063856c71dd14610151578063a9059cbb14610166578063dd62ed3e1461018a575b600080fd5b34801561009e57600080fd5b506100b6600160a060020a03600435166024356101b1565b604080519115158252519081900360200190f35b3480156100d657600080fd5b506100df610217565b60408051918252519081900360200190f35b3480156100fd57600080fd5b506100df61021d565b34801561011257600080fd5b506100b6600160a060020a0360043581169060243516604435610223565b34801561013c57600080fd5b506100df600160a060020a036004351661032f565b34801561015d57600080fd5b506100b661034a565b34801561017257600080fd5b506100b6600160a060020a036004351660243561034f565b34801561019657600080fd5b506100df600160a060020a0360043581169060243516610405565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025481565b60025490565b600160a060020a03831660009081526020819052604081205482111561024857600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561027857600080fd5b600160a060020a03831660009081526020819052604090205461029b9083610430565b15156102a657600080fd5b600160a060020a03808516600081815260016020908152604080832033845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600090565b3360009081526020819052604081205482111561036b57600080fd5b600160a060020a03831660009081526020819052604090205461038e9083610430565b151561039957600080fd5b3360008181526020818152604080832080548790039055600160a060020a03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b81011015905600a165627a7a723058207252a0032006eacf49b8acd5b3c0ab64152b74d1444aa37ac7d9120bbcc7fc680029","runtime_bytecode":"60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806315945790146100ca57806318160ddd146100f157806323b872dd1461010657806370a0823114610130578063856c71dd14610151578063a9059cbb14610166578063dd62ed3e1461018a575b600080fd5b34801561009e57600080fd5b506100b6600160a060020a03600435166024356101b1565b604080519115158252519081900360200190f35b3480156100d657600080fd5b506100df610217565b60408051918252519081900360200190f35b3480156100fd57600080fd5b506100df61021d565b34801561011257600080fd5b506100b6600160a060020a0360043581169060243516604435610223565b34801561013c57600080fd5b506100df600160a060020a036004351661032f565b34801561015d57600080fd5b506100b661034a565b34801561017257600080fd5b506100b6600160a060020a036004351660243561034f565b34801561019657600080fd5b506100df600160a060020a0360043581169060243516610405565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025481565b60025490565b600160a060020a03831660009081526020819052604081205482111561024857600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561027857600080fd5b600160a060020a03831660009081526020819052604090205461029b9083610430565b15156102a657600080fd5b600160a060020a03808516600081815260016020908152604080832033845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600090565b3360009081526020819052604081205482111561036b57600080fd5b600160a060020a03831660009081526020819052604090205461038e9083610430565b151561039957600080fd5b3360008181526020818152604080832080548790039055600160a060020a03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b81011015905600a165627a7a723058207252a0032006eacf49b8acd5b3c0ab64152b74d1444aa37ac7d9120bbcc7fc680029","real_runtime_bytecode":"60806040526004361061008d5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663095ea7b3811461009257806315945790146100ca57806318160ddd146100f157806323b872dd1461010657806370a0823114610130578063856c71dd14610151578063a9059cbb14610166578063dd62ed3e1461018a575b600080fd5b34801561009e57600080fd5b506100b6600160a060020a03600435166024356101b1565b604080519115158252519081900360200190f35b3480156100d657600080fd5b506100df610217565b60408051918252519081900360200190f35b3480156100fd57600080fd5b506100df61021d565b34801561011257600080fd5b506100b6600160a060020a0360043581169060243516604435610223565b34801561013c57600080fd5b506100df600160a060020a036004351661032f565b34801561015d57600080fd5b506100b661034a565b34801561017257600080fd5b506100b6600160a060020a036004351660243561034f565b34801561019657600080fd5b506100df600160a060020a0360043581169060243516610405565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025481565b60025490565b600160a060020a03831660009081526020819052604081205482111561024857600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561027857600080fd5b600160a060020a03831660009081526020819052604090205461029b9083610430565b15156102a657600080fd5b600160a060020a03808516600081815260016020908152604080832033845282528083208054889003905583835282825280832080548890039055938716808352918490208054870190558351868152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600090565b3360009081526020819052604081205482111561036b57600080fd5b600160a060020a03831660009081526020819052604090205461038e9083610430565b151561039957600080fd5b3360008181526020818152604080832080548790039055600160a060020a03871680845292819020805487019055805186815290519293927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b81011015905600a165627a7a72305820","gas_estimates":{"creation":{"codeDepositCost":"224600","executionCost":"40403","totalCost":"265003"},"external":{"_supply()":"406","allowance(address,address)":"862","approve(address,uint256)":"22332","balanceOf(address)":"697","isAvailable()":"300","totalSupply()":"428","transfer(address,uint256)":"43588","transferFrom(address,address,uint256)":"64409"},"internal":{"safeToAdd(uint256,uint256)":"24"}},"function_hashes":{"_supply()":"15945790","allowance(address,address)":"dd62ed3e","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","isAvailable()":"856c71dd","totalSupply()":"18160ddd","transfer(address,uint256)":"a9059cbb","transferFrom(address,address,uint256)":"23b872dd"},"abi":[{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"ok","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"_supply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x15945790"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"supply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"ok","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":true,"inputs":[],"name":"isAvailable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x856c71dd"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"ok","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa9059cbb"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"_allowance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdd62ed3e"},{"inputs":[{"name":"initial_balance","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"}]};
let AlreadyDeployedToken = new EmbarkJS.Blockchain.Contract(AlreadyDeployedTokenJSONConfig);
export default AlreadyDeployedToken;
