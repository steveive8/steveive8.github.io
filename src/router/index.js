import React, {useState, useEffect} from 'react';
import Main from '../screens/main';
import {Switch, Route} from 'react-router-dom';

import {Text, Flex} from '../screens/components/plain';
import Header from '../screens/components/header';
import Intro from '../screens/intro';

export const Router = () => {
    const [page, setPage] = useState(0);
    useEffect(() => {
        const renderer = () => {
            if(page === 2) {
                return setTimeout(() => setPage(3), 5000);
            }
        };
        renderer();
    }, [page])
    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
            <Header page={page} />
            {(page === 0 || page === 1) && <Intro page={page} setPage={setPage} />}
            {(page === 2 || page === 3) && 
                <>
                    {page === 2 && <Loader />}
                    <Switch>
                        <Route path="/main">
                            <Main page={page} />
                        </Route>
                    </Switch>
                </>}
        </div>
    )
}

export default Router;


const Loader = ({page}) => {
    return (
        <Flex align="center" justify="center" style={{width: '100vw', height: '100vh'}}>
            <Text weight="700" size="30">Generating Universe...</Text>
        </Flex>
    )
}