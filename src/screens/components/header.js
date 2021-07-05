import React from 'react';
import {Col, Row, Text, Flex, Image, Link} from './plain';
import logo from '../../imgs/steveivespacelogo.png';

export const Header = ({setPage, page}) => {
    return (
        <Row onClick={() => setPage(2)} align="center" justify="flex-start" position="fixed" width="100%" padding="padding: 20px;" zIndex={1000} bg="rgba(0,0,0,0)" style={{opacity: page >= 3 ? 1 : 0, left: page === 3 ? 0 : 100, transition: 'all 700ms'}}>
            <Link to='/'>
                <Image src={logo} height="40px" />
            </Link>
        </Row>
    )
};

export default Header;