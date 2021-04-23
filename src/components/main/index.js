import React, {useEffect, useState} from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { Col, Flex } from '../common/plain';
import Header from '../header';
import Interest from './interest';
import SteveIveSpace from './steveive';

export const Index = ({}) => {
    return (
        <Col width="100vw" height="100vh" position="fixed" zIndex={100} style={{top: 0, overflow: 'hidden', overflowY: 'scroll'}}>
            <Header />
            <SteveIveSpace />
            <Interest />
        </Col>
    )
}

export default Index;