import React, {useState} from 'react';
import {Col, Row, Text, Flex, Image} from '../components/plain';
import ReactMarkdown from 'react-markdown';

const gfm = require('remark-gfm');

export const Top = ({main}) => {
    return (
        <Row padding="padding: 10%; padding-bottom: 0;">
            <Col className="description" flex={2}>
                <ReactMarkdown remarkPlugins={[gfm]} children={main.markdown} />
                <Flex margin="margin-top: 20px;">
                    {main.hashtags.map((item) => <Hashtag key={item} name={item} />)}
                </Flex>
            </Col>
            <Flex flex={1} justify="flex-end">
                <Image width="100%" of="contain" style={main.imageStyle} src={main.image} />
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

const Tag = ({content}) => (
    <Row style={{bottom: 10, left: 10}} position="absolute" align="center">
        <Flex padding="padding: 5px 10px;" br="5px" bg="rgb(10,10,10)">
        <Text size="12" weight="500" color="#00dcff">{content.project ? 'Project' : 'Study'}</Text>
        </Flex>
        <Text lh={18} size="12" color="#00dcff" margin="margin-left: 10px;">{content.project || content.study}</Text>
    </Row>
)

export const Typer = ({type}) => {
    const colorer = () => {
        if (type == 'jupyter'){
            return {
                text: 'Jupyter Notebook',
                color: '#c97e26',
            }
        } else if (type == 'python'){
            return {
                text: 'Python',
                color: '#4669a1'
            }
        } else if (type == 'readme'){
            return {
                text: 'README.md',
                color: '#00dcff',
            }
        }
    }
    return (
        <Row align="center" position="absolute" style={{bottom: 40}}>
            <Flex br="50%" size="12.5px" bg={colorer(type).color}></Flex>
            <Text weight="400" size="14" color="rgb(180, 180, 180)" margin="margin-left: 10px; margin-bottom: 3px;">{colorer(type).text}</Text>
        </Row>
    )
}

export const Posts = ({setPage, content, setMainContent}) => {
    const selector = () => {
        setPage(5);
        return setMainContent(content);
    }
    return (
        <Col onClick={() => selector()} to="cursor" position="relative" height="200px" flex={1} br="20px" margin="margin: 10px;" bg="rgb(20,20,20)" padding="padding: 15px;" style={{overflow: 'hidden'}}>
            <Text margin="margin-bottom: 5px;" lh={18} size={17} weight="600">{content.title}</Text>
            <Typer type={content.type} />
            {(content.project || content.study) &&  <Tag content={content} />}
        </Col>
    )
}