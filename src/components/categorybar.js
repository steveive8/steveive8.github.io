import React, {useState} from 'react';
import {isMobile} from 'react-device-detect';
import styled from 'styled-components';
import { Col, Text } from './common/plain';
import {Height, Width} from '../hooks/getWindow';

const Bar = styled(Col)`
    width: ${isMobile ? '100vw' : (Width / 5.5) + 'px'};
    height: ${isMobile ? '100vh' : (Height - 180)+'px'};
    position: fixed;
    background-color: rgba(244, 226, 198, 0.75);
    background-color: rgb(23,23,23);
    transition: left 300ms ease-in-out;
    left: ${props => props.categoryOn ? 0 : isMobile ? '-100%' : (-Width / 5) + 'px'};
    top: ${isMobile ? 0 : 110}px;
    padding: 30px;
    z-index: 1000;
    padding-top: 50px;
    overflow: ${isMobile ? 'hidden' : 'scroll'};
`;

export const CategoryBar = ({categoryOn, setCategoryOn}) => {
    return (
        <Bar categoryOn={categoryOn}>
            <Col margin="margin-bottom: 20px;">
                <Text size="20" weight="700" to={true} margin="margin-bottom: 10px;">Lab</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Artificial Intelligence</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Service & Design</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Blockchain</Text>
            </Col>
            <Col margin="margin-bottom: 20px;">
                <Text size="20" weight="700" to={true} margin="margin-bottom: 10px;">Physics</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Quantam Physics</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Relativity Theory</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Leo's Theory</Text>
            </Col>
            <Col margin="margin-bottom: 20px;">
                <Text size="20" weight="700" to={true} margin="margin-bottom: 10px;">Buddhism</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Mindfulness</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" lh={20} to={true}>Physics with Buddhism</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Buddha's Saying</Text>
            </Col>
            <Col margin="margin-bottom: 20px;">
                <Text size="20" weight="700" to={true} margin="margin-bottom: 10px;">Philosophy</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Life</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" lh={20} to={true}>Cross of Literature and Technology</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Design</Text>
            </Col>
            <Col margin="margin-bottom: 20px;">
                <Text size="20" weight="700" to={true} margin="margin-bottom: 10px;">Daily Concern</Text>
                <Text size="15" margin="margin: 5px 10px;" weight="500" to={true}>Daily Writes</Text>
            </Col>
            <Text size="15" weight="700" to={true} margin="margin-bottom: 10px;">Contact Me</Text>
        </Bar>
    )
};

export default CategoryBar;