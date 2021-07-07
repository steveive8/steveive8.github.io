import React from 'react';
import {Col, Row, Flex, Text, Image} from '../components/plain';

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
            <Row>
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