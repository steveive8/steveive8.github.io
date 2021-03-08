import React, {useState} from 'react';
import styled from 'styled-components';
import { Col, Flex, Row, Text } from '../common/plain';

const Box = styled(Flex)`
    border-radius: 20px;
    width: 180px;
    height: 120px;
    background-color: rgb(23,23,23);
    margin-right: 15px;
`;

export const Recent = ({}) => {
    return (
        <Col>
            <Text size="30" weight="700">Recent Work</Text>
            <Row margin="margin-bottom: 15px;" align="center" justify="center">
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Row>
            <Row margin="margin-bottom: 15px;" align="center" justify="center">
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Row>
            <Row margin="margin-bottom: 15px;" align="center" justify="center">
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Row>
        </Col>
    )
};

export default Recent;