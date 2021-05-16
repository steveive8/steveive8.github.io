import React, {useEffect, useState} from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { Col, Flex } from '../common/plain';
import Header from '../header';
import Interest from './interest';
import SteveIveSpace from './steveive';
import Category from '../category/category';
import PostList from '../postlist';
import ai from '../../contents/ai';

export const Index = ({}) => {
    const [categoryon, setCategoryon] = useState(false);
    const [postliston, setPostliston] = useState(false);
    return (
        <Col width="100vw" height="100vh" position="fixed" zIndex={100} style={{top: 0, overflow: 'hidden', overflowY: 'scroll'}}>
            <Header categoryon={categoryon} setCategoryon={setCategoryon} />
            <SteveIveSpace />
            <Interest />
            <PostList page={"A.I"} contents={ai} on={postliston} />
            <Category postliston={postliston} setPostliston={setPostliston} categoryon={categoryon} setCategoryon={setCategoryon} />
        </Col>
    )
}

export default Index;

//            <Content page="Deep Learning from Scratch" contents={ai} />