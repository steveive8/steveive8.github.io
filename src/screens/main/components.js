import React, {useEffect, useState} from 'react';
import {Flex, Row, Col, Text, Image} from '../components/plain';
import styled from 'styled-components';

const StarWrap = styled(Flex)`
    animation: blinker ${(props) => props.blinks}s linear infinite;
    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
    border-radius: 50%;
    background-color: ${(props) => props.size === 1 ? 'white' : props.size === 2 ? '#00dcff' : '#FFA100'};
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
`;
//FFA100

export const Star = ({x, y, size, src, blinks}) => {
    return (
        <Flex to="hover" position="absolute" style={{left: `${x}%`, top: `${y}%`}} align="center" justify="center" size="23px">
            <StarWrap blinks={blinks} position="absolute" style={{left: -23, top: -23}} size={1}></StarWrap>
            <StarWrap blinks={blinks} position="absolute"style={{left: 23, top: 23}} size={1}></StarWrap>
            <StarWrap blinks={blinks} position="absolute" style={{right: -23, top: -23}} size={1}></StarWrap>
            <StarWrap blinks={blinks} position="absolute"style={{right: 23, top: 23}} size={1}></StarWrap>
            <StarWrap blinks={blinks} size={size}>

            </StarWrap>
        </Flex>

    )
}