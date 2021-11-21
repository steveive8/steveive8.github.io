import blockchainimage from '../../imgs/blockchain.jfif';

const string = `
# Blockchain

Introduction homepage of Steve Ive. You can find my projects, researches and philosophy etc.

https://steveive8.github.io

👋 Hi, I’m @steveive8 I'm an undergraduate student of Korea Univ. , department of Artificial Intelligence.

I'm interested in

- Adopting GAN(Generative Adversarial Network) to Art, Global Economy, and Human Cognitive.
- Realtime Object Detection and developing CNN(Convolutional Neural Network) to the best capability.
- Self training Gym Environment with combining GAN and Reinforcement Learning.
- Protocol Economy, Share Economy Modeling to 'Zero Marginal Society' with Blockchain.
- Service Develop and Design, FullStack Engineering with React.js, React Native, Javascript, Node.js, SQL.

Thanks 😁`

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