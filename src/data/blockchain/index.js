import blockchainimage from '../../imgs/blockchain.jfif';

const string = `
# Blockchain


Protocol Economy, Share Economy Modeling to 'Zero Marginal Society' with Blockchain.
`

export const blockchain_main = {
    markdown: string,
    image: blockchainimage,
    imageStyle: {marginBottom: 40},
    hashtags: ['Ethereum', 'Solidity', 'Web3.js', 'Decentralized Protocol', 'Decentralized Ledger'],
};

export const blockchain = [
    {
        id: 4,
        type: 'jupyter',
        src: 'https://raw.githubusercontent.com/steveive8/NoncerX/main/noncerx.ipynb',
        project: 'NoncerX',
        title: 'NoncerX',
        folder: 'blockchain-01',
        github: 'https://github.com/steveive8/NoncerX',
        hashtags: [
            {
                name: 'bitcoin'
            },
            {
                name: 'nonce'
            },
            {
                name: 'Deep Learning',  
            },
            {
                name: 'NoncerX',
            },
            {
                name: 'Hash'
            }
        ]
    }
];

export default blockchain;