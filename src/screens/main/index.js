import React, {useEffect} from 'react';
import {Image} from '../components/plain';
import {Star} from './components';
import {stars} from './stars';

export const Main = ({page}) => {
    return (
        <div style={{width: '100vw', height: '100vh', opacity: page === 3 ? 1 : 0, transition: 'all 500ms'}}>
            <div style={{width: '100vw', height: '100vh', position: 'absolute'}}>
                {stars.map((item, index) => <Star key={index} blinks={Math.floor(Math.random()*23)} x={item.x} y={item.y} size={item.size} />)}
            </div>
        </div>
    );
};

export default Main;