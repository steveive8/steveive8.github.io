import React, {useState} from 'react';
import Circle from './components/circle';
import Head from './components/head';

export const Intro = () => {
    const [page, setPage] = useState(0);
    return (
        <div style={{width: '100wh', height: '100vh', overflow: 'hidden'}}>
            <Head page={page} setPage={setPage} />
            <Circle page={page} setPage={setPage} />
        </div>
    )
}

export default Intro;