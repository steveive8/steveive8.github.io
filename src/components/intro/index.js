import React from 'react';
import Circle from './circle';
import Head from './head';

export const Intro = ({page, setPage}) => {
    return (
        <div style={{width: '100wh', height: '100vh', overflow: 'hidden'}}>
            <Head page={page} setPage={setPage} />
            <Circle page={page} setPage={setPage} />
        </div>
    )
}

export default Intro;