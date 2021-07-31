import React, {useState, useEffect} from 'react';
import Intro from '../screens/intro';
import Main from '../screens/main';
import Post from '../screens/post';
import PostList from '../screens/postlist';

import about, {main} from '../data/about';
import ai, {ai_main} from '../data/ai';
import blockchain, {blockchain_main} from '../data/blockchain';
import relativity, {relativity_main} from '../data/relativity';
import quantaum, {quantaum_main} from '../data/quantaum';
import dev, {dev_main} from '../data/dev';

import {Text, Flex} from '../screens/components/plain';
import Header from '../screens/components/header';
import DockBar from '../screens/components/dockbar';


export const Router = () => {
    const [page, setPage] = useState(0);
    const [hashtag, setHashtag] = useState(null);
    const [id, setId] = useState('A.I');
    const [content, setContent] = useState(data[id])
    const [mainContent, setMainContent] = useState(null);
    useEffect(() => {
        setContent(data[id])
    }, [id])

    const selector = (id) => {
        setPage(6)
        setId(id)
    };
    useEffect(() => {
        const renderer = () => {
            if(page === 2) {
                return setTimeout(() => setPage(3), 100);
            }
        };
        renderer();
    }, [page])
    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
            <Header hashtag={hashtag} id={id} setPage={setPage} page={page} />
            {(page === 0 || page === 1) && <Intro page={page} setPage={setPage} />}
            {page >= 2 && 
                <>
                    <DockBar setPage={setPage} selector={selector} />
                    {page === 2 && <Loader />}
                    {page === 3 && <Main page={page} setPage={setPage} />}
                    {page === 5 && <Post content={mainContent} page={page} setPage={setPage} />}
                    {page === 6 && <PostList content={content} setMainContent={setMainContent} hashtag={hashtag} setHashtag={setHashtag} page={page} setPage={setPage} />}
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

export const data = {
    'About Me': {
        posts: about,
        main: main
    },
    'A.I': {
        posts: ai,
        main: ai_main
    },
    'Blockchain': {
        posts: blockchain,
        main: blockchain_main,
    },
    'Relativity': {
        posts: relativity,
        main: relativity_main,
    },
    'Quantaum': {
        posts: quantaum,
        main: quantaum_main,
    },
    'Develop': {
        posts: dev,
        main: dev_main,
    }
}