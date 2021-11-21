import deeplearningzerotoall2 from './deeplearningzerotoall2';
import aiimage from '../../imgs/deep.jpg';

const string = `
# Artificial Intelligence

Deep Learning

https://steveive8.github.io

👋 Hi, I’m @steveive8 I'm an undergraduate student of Korea Univ. , department of Artificial Intelligence.

I'm interested in

- Adopting GAN(Generative Adversarial Network) to Art, Global Economy, and Human Cognitive.
- Realtime Object Detection and developing CNN(Convolutional Neural Network) to the best capability.
- Self training Gym Environment with combining GAN and Reinforcement Learning.
- Protocol Economy, Share Economy Modeling to 'Zero Marginal Society' with Blockchain.
- Service Develop and Design, FullStack Engineering with React.js, React Native, Javascript, Node.js, SQL.

Thanks 😁`

export const ai_main = {
    markdown: string,
    image: aiimage,
    imageStyle: {marginBottom: 40},
    hashtags: ['Deep Learning', 'Object Detection', 'Generative Adversarial Networks', 'CNN', 'Transformer']
};

const ai_ = [
    {
        id: 0,
        type: 'jupyter',
        src: 'https://raw.githubusercontent.com/steveive8/Study-Deep-Learning-from-scratch/main/Chap%202-4%3A%20Perceptron_to_Training_Neural_Network.ipynb',
        study: 'ORELLY: Deep Learning From Scratch',
        title: 'Deep Learning From Scratch Ch01 - 04',
        folder: 'ai-01',
        github: 'https://github.com/steveive8/Study-Deep-Learning-from-scratch',
        hashtags: ['Deep Learning', 'Deep Learning From Scratch', 'jupyter', 'study']

    },
    {
        id: 1,
        type: 'jupyter',
        src: 'https://raw.githubusercontent.com/steveive8/Study-Deep-Learning-from-scratch/main/Chap%205-8%3A%20Backpropagation_to_Deep%20Learning.ipynb',
        study: 'ORELLY: Deep Learning From Scratch',
        title: 'Deep Learning From Scratch Ch05 - 08',
        folder: 'ai-01',
        github: 'https://github.com/steveive8/Study-Deep-Learning-from-scratch',
        hashtags: ['Deep Learning', 'Deep Learning From Scratch', 'jupyter', 'study']
    },
    {
        id: 2,
        type: 'jupyter',
        src: 'https://raw.githubusercontent.com/steveive8/Alzheimer-Analysis-by-MLE/main/Research%20for%20bivariate%20and%20univariate%20MLE%20between%20Brain%20Diseases.ipynb',
        project: 'Brain Diesease Analysis: Alzheimer',
        title: "Research for bivariate and univariate MLE between Brain Diseases",
        folder: 'ai-02',
        github: 'https://github.com/steveive8/Alzheimer-Analysis-by-MLE',
        hashtags: ['Brain Disease Analysis', 'Deep Learning', 'Alzheimer-Analysis-by-MLE', 'Alzheimer', 'jupyter']
    },
    {
        id: 3,
        type: 'jupyter',
        src: 'https://raw.githubusercontent.com/steveive8/Brain-Diseases-Classifier-ML/main/Research%20for%20Machine%20Learning%20Methods%20for%20Classification%20of%20Brain%20Diseases.ipynb',
        project: 'Brain Diesease Analysis: Alzheimer',
        title: "Research for Machine Learning Methods for Classification of Brain Diseases",
        folder: 'ai-02',
        github: 'https://github.com/steveive8/Brain-Diseases-Classifier-ML',
        hashtags: ['Brain Disease Analysis', 'Deep Learning', 'Alzheimer-Analysis-by-MLE', 'Alzheimer', 'jupyter']

    },
]

export const ai = ai_.concat(deeplearningzerotoall2)

export default ai;