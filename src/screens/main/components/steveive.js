import React, {useState, useEffect} from 'react';
import {Col, Row, Text, Flex, Image} from '../../components/common/plain';
import {Height, Width} from '../../../hooks/getWindow';

export const SteveIveSpace = ({}) => {
    return (
        <Flex width="100vw" height='100vh' position="absolute">
            <Image width="100%" height="100vh" of="cover" src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg" />
            <Col position="absolute" zIndex={100} style={{top: Height / 1.7, left: Width / 17}}>
                <Col margin="margin-bottom: 30px;">
                    <Text weight="700" size="50">Steve Ive Choi</Text>
                </Col>
                <Col>
                    <Text weight="500" size="20" margin="margin-bottom: 10px;">Undergraduate Student at Korea Univ. Majoring at Artificial Intelligence</Text>
                    <Text weight="500" size="20">Creative Studio to be the greatest philosopher</Text>
                </Col>
            </Col>
        </Flex>
    )
};

export default SteveIveSpace;