import React, {useState} from 'react';
import styled from 'styled-components';
import {Col, Row, Text, Flex} from '../components/common/plain';

export const Post = ({title, content, date, listview}) => {
    return (
        <Col to="cursor" width={listview ? '95.8%' : "100%"} padding={!listview && "padding: 100px 15%"} margin={listview && 'margin: 20px;'} height={"100%"} style={{maxHeight: listview ? 400 : 'auto'}} bg="rgb(3,5,8)">
            <Row align="center" justify="space-between" margin="margin: 15px 0px;">
                <Text size="20" weight="500">Steve Ive</Text>
                <Text size="17" weight="400">{date}</Text>
            </Row>
            <Text margin="margin-bottom: 20px" weight="700" size="30">{title}</Text>
            {content}
        </Col>
    );
};

export default Post;