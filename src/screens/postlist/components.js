import React, {useState} from 'react';
import {Col, Row, Text, Flex, Image} from '../components/plain';
import ReactMarkdown from 'react-markdown';

const gfm = require('remark-gfm');

export const Top = ({category}) => {
    return (
        <Row>
            <Col className="description" flex={3}>
                <ReactMarkdown remarkPlugins={[gfm]} children={category.markdown} />
                <Flex margin="margin-top: 20px;">
                    {category.hashtags.map((item) => <Hashtag key={item.name} name={item.name} />)}
                </Flex>
            </Col>
            <Image flex={1} src={category.image} />
        </Row>
    )
}

export const Hashtag = ({name}) => {
    return (
        <Flex to="cursor"padding="padding: 10px 15px;" margin="margin: 0px 10px;" bg="rgb(23,23,23)" br="10px;">
            <Text weight="500" size="14" color="#00dcff">#{name}</Text>
        </Flex>
    )
}