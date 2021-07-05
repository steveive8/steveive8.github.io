import React, {useState} from 'react';
import Main from '../screens/main';
import {Switch, Route} from 'react-router-dom';

import Header from '../screens/components/header';
import Intro from '../screens/intro';

export const Router = () => {
    const [page, setPage] = useState(0);
    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
            <Header />
            {(page === 0 || page === 1) ? <Intro page={page} setPage={setPage} /> : 
            <div>
                <Switch>
                    <Route path="/main">
                        <Main page={page} />
                    </Route>
                </Switch>
            </div>}
        </div>
    )
}

export default Router;