import React, {useState} from 'react';
import styled from 'styled-components';
import { Col } from './common/plain';
import {Width} from '../hooks/getWindow';

const Bar = styled(Col)`
    width: ${Width / 6}px;
    height: 100%;
    position: absolute;
    background-color: rgba(244, 226, 198, 0.75);
    background-color: rgba(75,75,75, 0.75);
    transition: left 300ms ease-in-out;
    left: ${props => props.categoryOn ? 0 : -Width / 6}px;
    top: 0px;
`;

export const CategoryBar = ({categoryOn, setCategoryOn}) => {
    return (
        <Bar categoryOn={categoryOn}>
        </Bar>
    )
};

export default CategoryBar;