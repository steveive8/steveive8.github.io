import React from 'react';
import { Flex, Col, Row, Text } from '../common/plain';
import styled from 'styled-components';

const Box = styled(Flex)`
    border-radius: 20px;
    width: 300px;
    height: 180px;
    background-color: rgb(23,23,23);
    margin-right: 15px;
    :hover {
        cursor: pointer;
        opacity: 0.85;
    }
`;

export const Mission = ({}) => {
    return (
        <Col padding="padding: 0px 60px;">
            <Text size="30" weight="700" margin="margin-bottom: 30px;">Recent Work</Text>
            <Row margin="margin-bottom: 15px;" align="center" justify="center">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Row>
            <Row margin="margin-bottom: 15px;" align="center" justify="center">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Row>
            <Row margin="margin-bottom: 15px;" align="center" justify="center">
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </Row>
        </Col>
    )
};

export default Mission;