import React from 'react';
import {Col, Row, Flex, Text, Image} from '../components/plain';
import {Top} from './components';

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

const category = {
    markdown: string,
    image: '',
    hashtags: [
        {
            name: 'iOS', 
        },
    {
        name: 'Android', 
    },
    {
        name: 'React Native', 
    },
    {
        name: 'React.js', 
    },
    {
        name: 'Web'
    },
],
};

export const Posts = ({content}) => {
    return (
        <Col to="cursor" height="200px" flex={1} br="20px" margin="margin: 10px;" bg="rgb(20,20,20)" padding="padding: 10px;" style={{overflow: 'hidden'}}>
            <Text margin="margin: 10px 0;" weight="700">{content.title}</Text>
            <Text weight="500">{content.description}</Text>
        </Col>
    )
}

export const PostList = ({}) => {
    return (
        <Col padding="padding: 10%">
            <Top category={category} />
            <Row margin="margin-top: 20px;">
                <Posts content={{title: 'Hello', description: 'good'}} />
                <Posts content={{title: 'Hello', description: 'good'}} />
                <Posts content={{title: 'Hello', description: 'good'}} />
            </Row>
            <Row>
                <Posts content={{title: 'Hello', description: 'good'}} />
                <Posts content={{title: 'Hello', description: 'good'}} />
            </Row>
            <Row>
                <Posts content={{title: 'Hello', description: 'good'}} />
                <Posts content={{title: 'Hello', description: 'good'}} />
                <Posts content={{title: 'Hello', description: 'good'}} />
            </Row>
        </Col>
    )
};

export default PostList;