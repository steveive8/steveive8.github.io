import React, {useState} from 'react';
import { Col, Flex, Row, Text } from './common/plain';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

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
        <Col justify="center" style={{position: 'fixed', top: 0, overflow: 'hidden', width: '100%', padding: 20, paddingLeft: 0, paddingRight: 0}} bg="black" zIndex={100}>
            <Row padding={`padding-left: ${isMobile ? 20 : 30}px`} justify="space-between" align="center">
                <a href="/">
                    <Text us="none" style={{fontFamily: 'Geometos', color: 'white', fontSize: 25, fontWeight: '500'}}>John Leo's Space</Text>
                </a>
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

export const MenuBtn = ({setCategoryOn, categoryOn}) => (
    <Flex us="none" to={true} style={{position: 'fixed', top: isMobile ? 15 : 17, zIndex: 1000, right: 20}} onClick={() => setCategoryOn(!categoryOn)}>
        <MenuButton />
    </Flex>
)

const Menu = styled(Flex)`
    display: inline-block;
    cursor: pointer;

    .bar1, .bar2, .bar3 {
        width: 24px;
        height: 2px;
        background-color: white;
        margin: 6px 0;
        transition: 0.4s;
    }

    /* Rotate first bar */
    .bar1 {
        ${props => props.press ? `-webkit-transform: rotate(-45deg) translate(-7px, 6px) ;
        transform: rotate(-45deg) translate(-7px, 6px) ;` : null};
    }

    /* Fade out the second bar */
    .bar2 {
        ${props => props.press ? `opacity: 0` : null};
    }

    /* Rotate last bar */
    .bar3 {
        ${props => props.press ? `
        -webkit-transform: rotate(45deg) translate(-5px, -5px) ;
        transform: rotate(45deg) translate(-5px, -5px) ;` : null}
    }
`;


export const MenuButton = ({}) => {
    const [press, setPress] = useState(false);
    return (
        <Menu class="container" press={press} onClick={() => setPress(!press)}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </Menu>
    )
}

export default Header;