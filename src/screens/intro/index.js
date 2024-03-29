import React, {useState} from 'react';
import Circle from './components/circle';
import Head from './components/head';
import {Flex, Link, Text} from '../components/plain';

export const Intro = ({page, setPage}) => {
    return (
        <div style={{width: '100wh', height: '100vh', overflow: 'hidden'}}>
            {page === 0 && <Head page={page} setPage={setPage} />}
            {page === 1 && <Circle page={page} setPage={setPage} />}
            <Flex to={'cursor'} style={{position: 'absolute', bottom: 38, right: 38}}>
                <Link to='/'>
                    <Text weight="600" onClick={() => setPage(2)}>
                        Skip &gt;
                    </Text>
                </Link>
            </Flex>
        </div>
    )
}

export default Intro;