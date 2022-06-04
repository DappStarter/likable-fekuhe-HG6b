require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note office pulp install drip equal genre'; 
let testAccounts = [
"0x520168b1dedf3b8d8ae5b71dc11a30dc487b1da4491acf03986b281cb1106d23",
"0xe4d0b665ef2c038337f43511c1348662ec7465161bf43d8b72020e9af6dbb597",
"0xc58f042c61d2ca5cac6a13b59e3a396a0bdd4df6644cc33eb73cfb04133d88b9",
"0x28381330503aa64d5b90ae6f8128680e8bd71f368b14adfc578ca58150511878",
"0xec093801b5f96afc69858959de6c9fb9069410fd9ac4ea56d7f678f71b4a4b28",
"0x66bde773d21dc0064659cc53e8cc51b1c72ad680b6d522bb8ff8521092c6d314",
"0x791a42e1f706fbfa05b055d4fa4426189c66a924cb65db6f6d2380f6f0d987c6",
"0x197664b03600b42c4f33316c6841f42ba3a0ff30ff60a1f3aa472a69665e3107",
"0x4d6e96c13fdc0286e47c688df82a82410c322b20a8da8fdf247ca29f9da06cc2",
"0x636b93e07e6a7470403ce19d6b4687da1f0d6f0f581137f4465cdbd2918287aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

