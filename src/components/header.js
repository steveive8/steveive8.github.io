import React, {useState} from 'react';
import { Col, Row, Text } from './common/plain';
import styled from 'styled-components';

const Directory = styled(Row)`
    a {
        border-right: solid 0.5px black;
        span {
            color: white;
        }
    };
    margin-top: 15px;
    padding-left: 32px;
    height: 50px;
    align-items: center;
    background-color: rgba(75,75,75, 0.75);
`;

export const Header = ({categoryOn, setCategoryOn, route = 'Lab'}) => {
    return (
        <Col justify="center" style={{position: 'fixed', top: 0, overflow: 'hidden', width: '100%', padding: 20, paddingLeft: 0, paddingRight: 0}}>
            <Row padding="padding-left: 30px;" justify="space-between">
                <a href="/">
                    <Text us="none" style={{fontFamily: 'Geometos', color: 'white', fontSize: 25, fontWeight: '500'}}>John Leo's Space</Text>
                </a>
                <Text onClick={() => setCategoryOn(!categoryOn)}>Click Me</Text>
            </Row>
            {route && (
                <Directory>
                    <a>
                        <Text margin="margin-right: 20px;" weight="500" size="22">Lab</Text>
                    </a>
                    <a>
                        <Text margin="margin: 0px 20px;" weight="500" size="22">A.I</Text>
                    </a>
                </Directory>
            )}
        </Col>
    )
};

export default Header;