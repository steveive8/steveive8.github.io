import React, {useState} from 'react';
import Circle from './components/circle';
import Head from './components/head';
import {Flex, Link, Text} from '../components/plain';

export const Intro = ({page, setPage}) => {
    return (
        <div style={{width: '100wh', height: '100vh', overflow: 'hidden'}}>
            <Head page={page} setPage={setPage} />
            <Circle page={page} setPage={setPage} />
            <Flex to={'cursor'} style={{position: 'absolute', bottom: 38, right: 38}}>
                <Link to='/main'>
                    <Text weight="600" onClick={() => setPage(2)}>
                        Skip &gt;
                    </Text>
                </Link>
            </Flex>
        </div>
    )
}

export default Intro;