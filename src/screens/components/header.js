import React from 'react';
import {Col, Row, Text, Flex, Image, Link} from './plain';
import logo from '../../imgs/steveivespacelogo.png';

export const Header = ({category, hashtag, setPage, page}) => {
    return (
        <Row align="center" justify="flex-start" position="fixed" width="100%" padding="padding: 20px;" zIndex={1000} style={{opacity: page >= 3 ? 1 : 0, left: page >= 3 ? 0 : '10%', transition: 'all 700ms'}}>
            <Link onClick={() => setPage(2)} to='/'>
                <Image src={logo} height="40px" />
            </Link>
            {page === 6 && (category || hashtag) && 
            <Row align="center" margin="margin-left: 20px; margin-bottom: 5px;">
                <Flex style={{height: 20, width: 1, backgroundColor: '#00dcff'}}></Flex>
                <Link style={{marginLeft: 20}} to='/' onClick={() => setPage(6)}>
                    <Text weight="600" size="20">{category || hashtag}</Text>
                </Link>
            </Row>}
        </Row>
    )
};

export default Header;