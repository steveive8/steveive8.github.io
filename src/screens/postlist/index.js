import React, {useState, useEffect} from 'react';
import {Col, Row, Flex, Text, Image} from '../components/plain';
import {Top, Posts} from './components';

export const PostList = ({setPage, id, content, setMainContent}) => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        const shower = () => {
            let postlists =[];
            let flag = 3;
            let index = 0;
            if(content.posts.length === 0){
                return setPost(null);
            }
            for(let i = 0; i < content.posts.length; i++){
                if(flag === 4){
                    postlists.push(
                        <Row>
                            {content.posts.slice(index, index + flag).map((item) => 
                                <Posts setMainContent={setMainContent} key={item.title} setPage={setPage} content={item} />     
                            )}
                        </Row>
                    )
                    index = index + 4;
                    flag = 3;
                } else {
                    postlists.push(
                        <Row>
                            {content.posts.slice(index, index + flag).map((item) => 
                                <Posts setMainContent={setMainContent} key={item.title} setPage={setPage} content={item} />
                            )}
                        </Row>
                    );
                    index = index + 3;
                    flag = 4;
                }
            }
            setPost(postlists);
        }
        shower();
    }, [content, id])
    return (
        <>
            <Top main={content.main} />
            <Col padding="padding: 10%; padding-top: 0;" margin="margin-top: 20px;">
                {posts ? posts : 
                    <Flex width="100%" height="100%" align="center" justify="center">
                        <Text>Adding...</Text>
                    </Flex>}
            </Col>
        </>
    )
};

export default PostList;