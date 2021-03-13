import React, {useEffect, useState} from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import CategoryBar from '../categorybar';
import { Row } from '../common/plain';
import Main from './main';
import {MenuBtn} from '../header';

export const Index = ({page, setPage}) => {
    const [categoryOn, setCategoryOn] = useState(false);
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        page === 2 && setTimeout(() => {
            setOpacity(1);
        }, 300)
    })
    return (
        <Row style={{width: '100vw', height: '100vh', overflow: 'hidden', opacity: opacity, transition: 'opacity 800ms ease-in-out'}}>
            <Main page={page} categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
            <CategoryBar categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
            <MenuBtn categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
        </Row>
    )
};

export default Index;