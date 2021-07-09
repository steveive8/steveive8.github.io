import React, {useState, useEffect} from 'react';
import {Flex, Text, Image} from '../components/plain';
import {Star} from './components';
import {stars} from './stars';

export const Main = ({setPage, page}) => {
    const blinks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let i = 0;
    const iterer = (index) => {
        if((index % 12) === 0){
            i = i + 1;
        }
        return blinks[index - 12 * (i-1)];
    }
    return (
        <Flex align="center" justify="center" style={{width: '100vw', height: '100vh', opacity: page === 3 ? 1 : 0, transition: 'all 500ms'}}>
            <div style={{width: '100vw', height: '100vh', position: 'absolute', overflow: 'hidden'}}>
                {stars.map((item, index) => <Star key={index} blinks={Math.floor(Math.random()*23)} x={item.x} y={item.y} size={item.size} />)}
            </div>
        </Flex>
    );
};

export default Main;