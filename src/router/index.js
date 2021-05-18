import React, {useState} from 'react';
import Intro from '../screens/intro';
import Header from '../screens/components/common/header';
import Main from '../screens/main';
import Post from '../screens/post';
import PostList from '../screens/postlist';
import {Switch, Route, useLocation} from 'react-router-dom';
import Category from '../screens/components/category';
import ai from '../contents/ai';
import blockchain from '../contents/blockchain';

export const Router = () => {
    const [categoryon, setCategoryon] = useState(false);
    let location = useLocation();
    let id = location.pathname.split('/')
    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
            <Header categoryon={categoryon} setCategoryon={setCategoryon} />
            <Category categoryon={categoryon} setCategoryon={setCategoryon} />
            <Switch>
                <Route exact path='/'>
                    <Intro />
                </Route>
                <Route path="/home">
                    <Main />
                </Route>
                <Route path="/about">
                    <Main />
                </Route>
                <Route path="/contact">
                    <Main />
                </Route>
                <Route path={`/${id[1]}`}>
                    <PostList page={id[1]} head={id[2]} subhead={id[3]} contents={ai} />
                </Route>
                <Route path={`/${id[1]}/${id[2]}`}>
                    <PostList page={id[1]} head={id[2]} subhead={id[3]} contents={ai} />
                </Route>
                <Route path={`/${id[1]}/${id[2]}/${id[3]}`}>
                    <PostList page={id[1]} head={id[2]} subhead={id[3]} contents={ai} />
                </Route>
                <Route path="/post">
                    <Post />
                </Route>
                <Route>
                    <Main />
                </Route>
            </Switch>
        </div>
    )
}

export default Router;