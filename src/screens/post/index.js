import React, { useEffect, useState } from 'react';
import {Col, Row, Flex, Text, CirclePic} from '../components/plain';
import ReactMarkdown from 'react-markdown';
import JupyterViewer from "react-jupyter-notebook";

const gfm = require('remark-gfm');

export const Post = ({content}) => {
  console.log(content);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
      content.type === 'jupyter' && fetch(content.src)
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
    }, [content.type])
    useEffect(() => {
        const styler = () => {
            const h2s = document.querySelectorAll('h2');
            const ps = document.querySelectorAll('p');
            for(let i = 0; i < h2s.length; i++){
              if(h2s[i].innerText.includes('##')){
                h2s[i].style = 'font-size: 25px; display: block; font-weight: 600; margin: 10px 0; line-height: 30px;'
                h2s[i].innerText = h2s[i].innerText.replaceAll('#', '')
              } else if(h2s[i].innerText.includes('#')){
                h2s[i].style = 'font-size: 30px; display: block; font-weight: 600; margin: 15px 0;'
                h2s[i].innerText = h2s[i].innerText.replaceAll('#', '')
              }
            }
            for(let i = 0; i < ps.length; i++){
              if(ps[i].innerText.includes('###')){
                ps[i].style = 'font-size: 18px; display: block; font-weight: 600; margin: 10px 0;'
                ps[i].innerText = ps[i].innerText.replaceAll('#', '')
              } else if(ps[i].innerText.includes('##')){
                ps[i].style = 'font-size: 25px; display: block; font-weight: 600; margin: 10px 0; line-height: 30px'
                ps[i].innerText = ps[i].innerText.replaceAll('#', '')
              } else if(ps[i].innerText.includes('#')){
                ps[i].style = 'font-size: 30px; display: block; font-weight: 600; margin: 15px 0;'
                ps[i].innerText = ps[i].innerText.replaceAll('#', '')
              }
            }
        }
        content.type === 'jupyter' && styler();
    }, [content.type, isLoaded])
    console.log(data);
    return (
        <div className="post" style={{position: 'fixed', width: '100vw', padding: '15%', paddingTop: '10%', height: '100%', overflowY: 'scroll'}}>
           {error ? <Text>Error: {error.message}</Text> :
           !isLoaded ? <Text>Loading...</Text> : 
           <>
              <Col width="100%" padding="padding-left: 50px">
                <Row align="center" justify="space-between" margin="margin-bottom: 30px;">
                    <CirclePic />
                    <Text>{content.date ? content.date : ''}</Text>
                </Row>
                <Text weight="700" size="30">{content.title}</Text>
              </Col>
              {content.type === 'jupyter' ?
                  <div className="jupyter" style={{marginTop: 30}}>
                      <JupyterViewer codeBlockStyles={{hljsStyle: "stackoverflowDark"}} rawIpynb={data} />
                  </div> : <ReactMarkdown remarkPlugins={[gfm]} children={content.markdown} />}
            </>}
        </div>
    )
}

export default Post;