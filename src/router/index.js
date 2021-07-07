import React, {useState, useEffect} from 'react';
import Intro from '../screens/intro';
import Main from '../screens/main';
import Post from '../screens/post';
import PostList from '../screens/postlist';

import {Text, Flex} from '../screens/components/plain';
import Header from '../screens/components/header';
import DockBar from '../screens/components/dockbar';

export const Router = () => {
    const [page, setPage] = useState(6);
    const [category, setCategory] = useState('A.I');
    const [hashtag, setHashtag] = useState(null);
    const [id, setId] = useState(null);
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
            <Header hashtag={hashtag} category={category} setPage={setPage} page={page} />
            {(page === 0 || page === 1) && <Intro page={page} setPage={setPage} />}
            {page >= 2 && 
                <>
                    <DockBar setCategory={setCategory} category={category} />
                    {page === 2 && <Loader />}
                    {page === 3 && <Main page={page} setPage={setPage} />}
                    {page === 5 && <Post page={page} setPage={setPage} />}
                    {page === 6 && <PostList setId={setId} hashtag={hashtag} category={category} page={page} setPage={setPage} />}
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