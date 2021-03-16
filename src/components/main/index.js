import React, {useEffect, useState} from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import CategoryBar from '../categorybar';
import { Flex } from '../common/plain';
import Main from './main';
import {MenuBtn} from '../header';

const MainBox = styled(Flex)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: ${props => props.opacity};
    transition: opacity 800ms ease-in-out;
`;

export const Index = ({page, setPage}) => {
    const [categoryOn, setCategoryOn] = useState(false);
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        page === 2 && setTimeout(() => {
            setOpacity(1);
        }, 300)
    })
    return (
        <MainBox oapcity={opacity}>
            <Main page={page} categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
            <CategoryBar categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
            <MenuBtn categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
        </MainBox>
    )
};

export default Index;