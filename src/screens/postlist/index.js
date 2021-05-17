import React, {useState, useEffect} from 'react';
import { Col, Link, Row, Text, Flex } from '../components/common/plain';
import Box from './components/box';
import Post from '../post';
import {ListViewIcon, BoxViewIcon} from '../../icons/view';
import Header from '../components/common/header';

export const PostList = ({page, contents, on}) => {
    const [array, setArray] = useState([]);
    const [listview, setListview] = useState(false);
    useEffect(() => {
        const pagination = () => {
            //012 34 567 89 101112 1314 151617 1819 202122
            const breaker = [3, 5, 8, 10, 13, 15, 18, 20, 23, 25, 28, 30, 33, 35, 38, 40, 43, 45, 48, 50, 53, 55]
            let subarray = []
            for(let i = 0; i < contents.length; i++){
                if (breaker.includes(i)) {
                    array.push(<Row>{subarray.map((item) => <Box title={item.title} key={item.title} src={item.src} link={item.src} subtitle={item.subtitle} />)}</Row>)
                    setArray(array);
                    subarray = []
                }
                subarray.push(contents[i])
                if(i === contents.length - 1){
                    array.push(<Row>{subarray.map((item) => <Box title={item.title} key={item.title} src={item.src} link={item.src} subtitle={item.subtitle} />)}</Row>)                    
                    setArray(array);
                    return setArray(array);
                }
            }
        };
        pagination();
    }, [array, contents])
    return (
        <>
            <Col width="100%" position="absolute" zIndex={100} bg="rgb(3,5,8)" padding="padding: 100px 16%;" style={{overflow: 'scroll', top: on ? 0 : '100%', opacity: on ? 1 : 0, transition: 'all 300ms ease-in-out'}}>
                <Col align="flex-start" justify="center" position="relative" padding="padding-left: 20px;">
                    <Changer listview={listview} setListview={setListview} />
                    <Text weight="700" size="40" margin="margin-bottom: 20px;">{page}</Text>
                    <Row margin="margin-bottom: 15px">
                        <Link>
                            <Text margin="margin-right: 10px;" weight="400" size="18" color="#00dcff">Study</Text>
                        </Link>
                        <Text margin="margin-right: 10px;" weight="400" size="18" color="#00dcff">></Text>
                        <Link>
                            <Text margin="margin-right: 10px;" weight="400" size="18" color="#00dcff">A.I</Text>
                        </Link>
                        <Text margin="margin-right: 10px;" weight="400" size="18" color="#00dcff">></Text>
                        <Link>
                            <Text margin="margin-right: 10px;" weight="400" size="18" color="#00dcff">{page}</Text>
                        </Link>
                        <Text weight="400" size="18" color="rgb(180,180,180)">Total {contents.length} Posts</Text>
                    </Row>
                </Col>
                <Col>
                    {listview ? contents.map((post) => <Post listview={true} content={post.content} date={post.date} title={post.title} />) 
                        : 
                    array}
                </Col>
            </Col>
        </>
    )
}

const Changer = ({setListview, listview}) => {
    return (
        <Flex to="cursor" onClick={() => setListview(!listview)} style={{width: 30, height: 30, right: 15, top: 15}} position="absolute">
            {listview ? <ListViewIcon size={30} /> : <BoxViewIcon size={30} />}
        </Flex>
    )
}

export default PostList;