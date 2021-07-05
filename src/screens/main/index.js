import React from 'react';
import {Image} from '../components/plain';
import {Star} from './components';
import {stars} from './stars';
import Intro from '../intro';

export const Main = ({}) => {
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <div style={{width: '100vw', height: '100vh', position: 'absolute'}}>
                {stars.map((item, index) => <Star key={index} blinks={Math.floor(Math.random()*23)} x={item.x} y={item.y} size={item.size} />)}
            </div>
            <Intro />
        </div>
    );
};

export default Main;