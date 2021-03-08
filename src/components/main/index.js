import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import CategoryBar from '../categorybar';
import { Row } from '../common/plain';
import Main from './main';

export const Index = ({page, setPage}) => {
    const [categoryOn, setCategoryOn] = useState(false);
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        page === 2 && setTimeout(() => {
            setOpacity(1);
        }, 800)
    })
    return (
        <Row style={{width: '100vw', height: '100vh', overflow: 'hidden', opacity: opacity, transition: 'opacity 800ms ease-in-out'}}>
            <Main page={page} categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
            <CategoryBar categoryOn={categoryOn} setCategoryOn={setCategoryOn} />
        </Row>
    )
};

export default Index;