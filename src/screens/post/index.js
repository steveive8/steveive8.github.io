import React from 'react';
import {Col, Row, Flex, Text, CirclePic} from '../components/plain';
import ReactMarkdown from 'react-markdown';
const gfm = require('remark-gfm');

export const Post = ({content = {date: '2021.07.04', title: 'Hello', markdown: `Just a link: https://reactjs.com.`}}) => {
    return (
        <div style={{position: 'fixed', width: '100vw', height: '100vh', padding: '15%', paddingTop: '10%'}}>
           <Col>
            <Row align="center" justify="space-between" margin="margin: 10px 0px;">
                <CirclePic />
                <Text>{content.date}</Text>
            </Row>
            <Text weight="700" size="30">{content.title}</Text>
            <Flex margin="margin-top: 30px;">
                <ReactMarkdown remarkPlugins={[gfm]} children={content.markdown} />
            </Flex>
           </Col>
        </div>
    )
}

export default Post;