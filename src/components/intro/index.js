import React from 'react';
import Circle from './circle';
import Head from './head';

export const Intro = ({page, setPage}) => {
    return (
        <>
            <Head page={page} setPage={setPage} />
            <Circle page={page} setPage={setPage} />
        </>
    )
}

export default Intro;