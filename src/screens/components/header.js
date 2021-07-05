import React from 'react';
import {Col, Row, Text, Flex, Image, Link} from './plain';
import logo from '../../imgs/steveivespacelogo.png';

export const Header = ({}) => {
    return (
        <Row align="center" justify="flex-start" position="fixed" width="100%" padding="padding: 20px;" bg="rgba(0,0,0,0)">
            <Link>
                <Image src={logo} height="50px" />
            </Link>
        </Row>
    )
};

export default Header;