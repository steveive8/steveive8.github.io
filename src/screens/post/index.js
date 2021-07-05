import React, { useEffect } from 'react';
import {Col, Row, Flex, Text, CirclePic} from '../components/plain';
import ReactMarkdown from 'react-markdown';
import JupyterViewer from "react-jupyter-notebook";
import dfs1 from '../../contents/ai/dfs1.json';
import styled from 'styled-components';

const gfm = require('remark-gfm');

export const Post = ({content = {date: '2021.07.04', title: 'Hello', markdown: `Just a link: https://reactjs.com.`}}) => {
    useEffect(() => {
        const styler = () => {
            const pres = document.querySelectorAll('.block h2');
            for(let i = 0; i < pres.length; i++){
                pres[i].innerText = 'hello'
            }
            console.log('hello');
        }
        styler();
    }, [])
    return (
        <div style={{position: 'fixed', width: '100vw', padding: '15%', paddingTop: '10%', height: '100%', overflowY: 'scroll'}}>
           <Col>
            <Row align="center" justify="space-between" margin="margin: 10px 0px;">
                <CirclePic />
                <Text>{content.date}</Text>
            </Row>
            <Text weight="700" size="30">{content.title}</Text>
            <div className="jupyter" style={{marginTop: 30}}>
                {/* <ReactMarkdown remarkPlugins={[gfm]} children={content.markdown} /> */}
                <JupyterViewer codeBlockStyles={{hljsStyle: "a11yDark"}} rawIpynb={dfs1} />
            </div>
           </Col>
        </div>
    )
}

export default Post;