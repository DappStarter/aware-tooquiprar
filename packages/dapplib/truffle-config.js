require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski struggle dash saddle concert harvest logic obscure tomorrow'; 
let testAccounts = [
"0x06df1c23404a8486c9b9304d016c2369390a271af4adb0a42bbce035e2ef08ba",
"0xcaa0def4bbd332b365cea684d7938fdbd5879741d96591782abc9e60450cccfe",
"0x091ff10f3327737d7fd16970fa7e116b497559481cee942b53d2d5050a3d0a14",
"0xaa72be579239ab2c20690c33ce79db0d44a18ec191b821c57a715849c21ca168",
"0x2d8b83d4577513fe58d1e50c0be9c90dcab4664acfa249fcb5e27968b05efe6d",
"0xde6bb0d2f88d163f7c5af5d5dc0bb1f2d0bfdf5fea2438ec8e1afa6b6e295d21",
"0x2cc14b7b2a8ac6b5bd03f076fb0a2ed62a754f43fff21d9698dcf848e66e001d",
"0x8af8e38e9d1464bf3e5fab3a0a632879b4247456188a5e3e195f86b05df6d43a",
"0x7c79050911d95b678f0d24d49d589fed37942a0f1ac9db99137b98ea500853de",
"0xf62127187d28fe9637e1aa3c1829fc209b3069aa6a02af0c993733180051634b"
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
            version: '^0.5.11'
        }
    }
};
