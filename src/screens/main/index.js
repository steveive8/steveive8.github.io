import React, {useEffect} from 'react';
import {Flex, Text, Image} from '../components/plain';
import {Star} from './components';
import {stars} from './stars';

export const Main = ({setPage, page}) => {
    return (
        <Flex align="center" justify="center" style={{width: '100vw', height: '100vh', opacity: page === 3 ? 1 : 0, transition: 'all 500ms'}}>
            <div style={{width: '100vw', height: '100vh', position: 'absolute'}}>
                {stars.map((item, index) => <Star key={index} blinks={Math.floor(Math.random()*23)} x={item.x} y={item.y} size={item.size} />)}
            </div>
            <div style={{zIndex: 1000}} onClick={() => setPage(5)}>go to Post</div>
        </Flex>
    );
};

export default Main;