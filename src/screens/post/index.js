import React, { useEffect, useState } from 'react';
import {Col, Row, Flex, Text, CirclePic} from '../components/plain';
import ReactMarkdown from 'react-markdown';
import JupyterViewer from "react-jupyter-notebook";
import dfs1 from '../../contents/ai/dfs1.json';
import styled from 'styled-components';

const gfm = require('remark-gfm');

export const Post = ({content = {date: '2021.07.04', title: 'Hello', markdown: `Just a link: https://reactjs.com.`}}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

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
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/steveive8/Study-Deep-Learning-from-scratch/main/Chap%202-4%3A%20Perceptron_to_Training_Neural_Network.ipynb')
          .then(res => res.json())
          .then(
            (result) => {
              setData(result);
              setIsLoaded(true);
            },
            // 주의: 컴포넌트에 있는 실제 버그로 인해 발생한 예외를 놓치지 않고 처리하기 위해서는 catch() 블록보다는 여기서 에러를 다뤄주는 게 중요합니다.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    return (
        <div style={{position: 'fixed', width: '100vw', padding: '15%', paddingTop: '10%', height: '100%', overflowY: 'scroll'}}>
           {error ? <Text>Error: {error.message}</Text> :
           !isLoaded ? <Text>Loading...</Text> : 
           <Col>
            <Row align="center" justify="space-between" margin="margin: 10px 0px;">
                <CirclePic />
                <Text>{content.date}</Text>
            </Row>
            <Text weight="700" size="30">{content.title}</Text>
            <div className="jupyter" style={{marginTop: 30}}>
                <ReactMarkdown remarkPlugins={[gfm]} children={content.markdown} />
                <JupyterViewer codeBlockStyles={{hljsStyle: "a11yDark"}} rawIpynb={data} />
            </div>
           </Col>}
        </div>
    )
}

export default Post;