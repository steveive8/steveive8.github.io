import React, {useState} from 'react';
import { Flex, Text } from '../common/plain';
import CircleBox from '../common/circle';
import {Width, Height} from '../../hooks/getWindow';

const centerX = Width / 2
const centerY = Height / 5;

export const ContributeMap = ({page}) => {
    const circles = [
        {
            text: "#Blockchain",
            x: centerX + Width / 5,
            y: centerY + Height / 20,
            size: 180,
            left: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#Ethereum",
            x: centerX + Width / 8,
            y: centerY + Height / 8,
            size: 150,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#Deep Learning",
            x: centerX + Width / 10,
            y: centerY - Height / 20,
            size: 175,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#CNN",
            x: centerX - Width / 8,
            y: centerY +  Height / 9,
            size: 180,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#YOLO",
            x: centerX - Width / 5,
            y: centerY + Height / 8,
            size: 130,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#React.js",
            x: centerX - Width / 3,
            y: centerY + Height / 12,
            size: 170,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#RNN",
            x: centerX - Width / 3.8,
            y: centerY - Height / 20,
            size: 150,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#Reinforcement Learning",
            x: centerX,
            y: centerY + Height / 7,
            size: 170,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#Artificial Intelligence",
            x: centerX - Width / 20,
            y: centerY - Height / 25,
            size: 200,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#GraphQL",
            x: centerX - Width / 7,
            y: centerY - Height / 20,
            size: 150,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        }
    ]
    return (
        <Flex width="100%" height={300}>
            <Text weight="700" size="30" style={{position: 'absolute', top: 145, left: Width / 20}}>Contribute Map</Text>
            <CircleBox page={page === 2 ? 1 : 0} circles={circles} height={'100%'} />
        </Flex>
    )
};

export default ContributeMap;