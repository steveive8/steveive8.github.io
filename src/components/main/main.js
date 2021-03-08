import React, {useState} from 'react';
import styled from 'styled-components';
import { Width } from '../../hooks/getWindow';
import { Flex } from '../common/plain';
import Header from '../header';
import ContributeMap from './contributeMap';
import Mission from './mission';
import Footer from '../footer';
import Recent from './recentWork';

const width = Width * 5 / 6;

const Box = styled(Flex)`
    position: absolute;
    height: 100vh;
    width: ${props => props.categoryOn ? width: Width}px;
    transition: all 300ms ease-in-out;
    right: 0px;
`;

export const Main = ({page, categoryOn, setCategoryOn}) => {
    return (
        <Box categoryOn={categoryOn}>
            <Header categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
            <Flex margin="margin-top: 100px;" width='100%' height="100%">
                <ContributeMap page={page} />
                <Recent />
                <Mission />
                <Footer />
            </Flex>
        </Box>
    )
}

export default Main;