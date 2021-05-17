import React from 'react';
import { Col } from '../components/common/plain';
import Interest from './components/interest';
import SteveIveSpace from './components/steveive';


export const Index = () => {
    return (
        <Col width="100vw" height="100vh" style={{top: 0, overflow: 'hidden', overflowY: 'scroll'}}>
            <SteveIveSpace />
            <Interest />
        </Col>
    )
}

export default Index;