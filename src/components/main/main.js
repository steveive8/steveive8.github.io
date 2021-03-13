import React, {useState} from 'react';
import {isMobile} from 'react-device-detect';
import styled from 'styled-components';
import { Height, Width } from '../../hooks/getWindow';
import { Flex, Col } from '../common/plain';
import Header from '../header';
import ContributeMap from './contributeMap';
import Mission from './mission';
import Footer from '../footer';


const Box = styled(Flex)`
    height: 100vh;
    width: 100vw;
    top: 0;
    position: fixed;
    overflow: hidden;
    overflow-y: scroll;
    left: 0;
`;

export const Main = ({page, categoryOn, setCategoryOn}) => {
    return (
        <Box>
            <Header categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
            <Col padding={`padding: ${isMobile ? 15 : 0}px; padding-top: 50px;`} width={'100%'} margin="margin-top: 80px;" height={Height+'px'}>
                <ContributeMap categoryOn={categoryOn} page={page} />
                <Mission />
                <Footer />
            </Col>
        </Box>
    )
}

export default Main;