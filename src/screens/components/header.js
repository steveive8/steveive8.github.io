import React from 'react';
import {Col, Row, Text, Flex, Image, Link} from './plain';
import logo from '../../imgs/steveivespacelogo.png';

export const Header = ({page}) => {
    return (
        <Row align="center" justify="flex-start" position="fixed" width="100%" padding="padding: 20px;" bg="rgba(0,0,0,0)" style={{opacity: page === 3 ? 1 : 0, marginLeft: page === 3 ? 0 : 100, transition: 'all 1s'}}>
            <Link to='/'>
                <Image src={logo} height="50px" />
            </Link>
        </Row>
    )
};

export default Header;