import React, {useState} from 'react';
import Intro from './screens/intro';
import Header from './screens/components/common/header';
import Main from './screens/main';
import Post from './screens/post';
import PostList from './screens/postlist';
import {Switch, Route, useLocation} from 'react-router-dom';
import Category from './screens/components/category';
import ai from './contents/ai';

export const Router = () => {
    const [categoryon, setCategoryon] = useState(false);
    let location = useLocation();
    let id = location.pathname.split('/')
    console.log(id);
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
                <Route path="/study">
                    <PostList page={"Study"} head={id[2]} subhead={id[3]} contents={ai} />
                </Route>
                <Route path="/physics">
                    <PostList page={"Physics"} head={id[2]} subhead={id[3]} contents={ai} />
                </Route>
                <Route path="/projects">
                    <PostList page={"Projects"} head={id[2]} subhead={id[3]} contents={ai} />
                </Route>
                <Route path="/steveive-theory">
                    <PostList page={"Steve Ive's Theory"} head={id[2]} subhead={id[3]} contents={ai} />
                </Route>
                <Route path="/post">
                    <Post />
                </Route>
            </Switch>
        </div>
    )
}

export default Router;