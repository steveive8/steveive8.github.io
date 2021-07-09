import React, {useState} from 'react';
import {Col, Row, Text, Flex, Image} from '../components/plain';
import ReactMarkdown from 'react-markdown';

const gfm = require('remark-gfm');

export const Top = ({main}) => {
    return (
        <Row padding="padding: 10%; padding-bottom: 0;">
            <Col className="description" flex={3}>
                <ReactMarkdown remarkPlugins={[gfm]} children={main.markdown} />
                <Flex margin="margin-top: 20px;">
                    {main.hashtags.map((item) => <Hashtag key={item.name} name={item.name} />)}
                </Flex>
            </Col>
            <Flex flex={1}>
                <Image width="90%" of="contain" style={main.imageStyle} src={main.image} />
            </Flex>
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


const typer = (type) => {
    if(type === 'jupyter'){
        return 'Jupyter Notebook'
    } else if(type === "python"){
        return 'Python'
    }
}

const Tag = ({content}) => (
    <Row style={{bottom: 10, left: 10}} position="absolute" align="center">
        <Flex padding="padding: 5px 10px;" br="5px" bg="rgb(10,10,10)">
        <Text size="12" weight="500" color="#00dcff">{content.project ? 'Project' : 'Study'}</Text>
        </Flex>
        <Text lh={18} size="12" color="#00dcff" margin="margin-left: 10px;">{content.project || content.study}</Text>
    </Row>
)

export const Posts = ({setPage, content, setMainContent}) => {
    const selector = () => {
        setPage(5);
        return setMainContent(content);
    }
    return (
        <Col onClick={() => selector()} to="cursor" position="relative" height="200px" flex={1} br="20px" margin="margin: 10px;" bg="rgb(20,20,20)" padding="padding: 15px;" style={{overflow: 'hidden'}}>
            <Text margin="margin-bottom: 5px;" lh={18} size={15} weight="600">{content.title}</Text>
            <Text weight="500">{content.type}</Text>
            {(content.project || content.study) &&  <Tag content={content} />}
        </Col>
    )
}