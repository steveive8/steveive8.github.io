import React, {useState, useEffect} from 'react';
import Intro from '../screens/intro';
import Main from '../screens/main';
import Post from '../screens/post';

import {Text, Flex} from '../screens/components/plain';
import Header from '../screens/components/header';

export const Router = () => {
    const [page, setPage] = useState(0);
    useEffect(() => {
        const renderer = () => {
            if(page === 2) {
                return setTimeout(() => setPage(3), 1500);
            }
        };
        renderer();
    }, [page])
    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
            <Header setPage={setPage} page={page} />
            {(page === 0 || page === 1) && <Intro page={page} setPage={setPage} />}
            {page >= 2 && 
                <>
                    {page === 2 && <Loader />}
                    {page === 3 && <Main page={page} setPage={setPage} />}
                    {page === 5 && <Post page={page} setPage={setPage} />}
                </>}
        </div>
    )
}

export default Router;


const Loader = () => {
    return (
        <Flex align="center" justify="center" style={{width: '100vw', height: '100vh'}}>
            <Text weight="700" size="30">Generating Universe...</Text>
        </Flex>
    )
}