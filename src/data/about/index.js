import Buddha from '../../imgs/buddha.png';
import ai from '../ai';
import blockchain from '../blockchain';
import dev from '../dev';
import quantaum from '../quantaum';
import relativity from '../relativity';

const string = `
# Steve Ive Space

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

export const main = {
    markdown: string,
    image: Buddha,
    imageStyle: {marginBottom: 40, width: '70%'},
    hashtags: ['iOS', 'Android', 'React Native', 'React.js', 'Web']
};

export const about = ai.concat(blockchain).concat(quantaum).concat(relativity).concat(dev)

export default about;