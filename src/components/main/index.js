import React, {useEffect, useState} from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { Col, Flex } from '../common/plain';
import Header from '../header';
import Interest from './interest';
import SteveIveSpace from './steveive';
import Category from '../category/category';

export const Index = ({}) => {
    const [categoryon, setCategoryon] = useState(false);
    return (
        <Col width="100vw" height="100vh" position="fixed" zIndex={100} style={{top: 0, overflow: 'hidden', overflowY: 'scroll'}}>
            <Header categoryon={categoryon} setCategoryon={setCategoryon} />
            <SteveIveSpace />
            <Interest />
            <Category categoryon={categoryon} setCategoryon={setCategoryon} />
        </Col>
    )
}

export default Index;