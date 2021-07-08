import React, {useState, useEffect} from 'react';
import {Col, Row, Flex, Text, Image} from '../components/plain';
import {Top} from './components';
import about, {main} from '../../data/about';

const typer = (type) => {
    if(type === 'jupyter'){
        return 'Jupyter Notebook'
    } else if(type === "python"){
        return 'Python'
    }
}

const Tag = ({content}) => (
    <Row style={{bottom: 10, left: 10}} position="absolute" align="center">
        <Flex padding="padding: 5px 10px;" br="5px" bg="rgb(10,10,10)">
        <Text size="12" weight="500" color="#00dcff">{content.project ? 'Project' : 'Study'}</Text>
        </Flex>
        <Text lh={18} size="12" color="#00dcff" margin="margin-left: 10px;">{content.project || content.study}</Text>
    </Row>
)

export const Posts = ({content}) => {
    return (
        <Col to="cursor" position="relative" height="200px" flex={1} br="20px" margin="margin: 10px;" bg="rgb(20,20,20)" padding="padding: 15px;" style={{overflow: 'hidden'}}>
            <Text margin="margin-bottom: 5px;" lh={18} size={15} weight="600">{content.title}</Text>
            <Text weight="500">{content.type}</Text>
            {(content.project || content.study) &&  <Tag content={content} />}
        </Col>
    )
}

export const PostList = ({content = {main: main, contents: about}}) => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        const shower = () => {
            let postlists =[];
            console.log(content.contents);
            let flag = 3;
            let index = 0;
            for(let i = 0; i < content.contents.length; i++){
                if(flag === 2){
                    postlists.push(
                        <Row>
                            {content.contents.slice(index, index + flag).map((item, index) => 
                                <Posts key={index} content={item} />     
                            )}
                        </Row>
                    )
                    index = index + 2;
                    flag = 3;
                } else {
                    postlists.push(
                        <Row>
                            {content.contents.slice(index, index + flag).map((item, index) => 
                                <Posts key={index} content={item} />
                            )}
                        </Row>
                    );
                    index = index + 3;
                    flag = 2;
                }
            }
            setPost(postlists);
        }
        shower();
    }, [])
    return (
        <>
            <Top category={content.main} />
            <Col padding="padding: 10%; padding-top: 0;" margin="margin-top: 20px;">
                {posts}
            </Col>
        </>
    )
};

export default PostList;