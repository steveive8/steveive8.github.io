import React, {useState} from 'react';
import styled from 'styled-components';
import {Flex, Col ,Row, Text, Link} from '../common/plain';
import ai from './ai';
import blockchain from './blockchain';
import steveivetheory from './steveivetheory';
import physics from './physics';
import math from './math';
import application from './application';
import {Close} from '../../icons/close';

export const Main = ({head, elements}) => {
    const [open, setOpen] = useState(true);
    return (
        <Col width="100%" margin="margin: 15px 0px;">
            <div onClick={() => setOpen(!open)} style={{height: 30}}>
                <Link>
                    <Text color="white" size="20" weight="700">{head}</Text>
                </Link>
            </div>
            {elements}
        </Col>
    )
}

const Minor = ({head, array, ai, postliston, setPostliston}) => {
    const [open, setOpen] = useState(false);
    return (
        <Col width="100%" padding="padding: 10px;" style={{height: ai ? open ? array.length * 35 + 35 + 20 : 32 : open ? array.length * 32 + 35 + 20 : 32, overflow: 'hidden', transition: 'all 300ms'}}>
            <div onClick={() => {setOpen(!open); setPostliston(!postliston)}} style={{width: '100%', height: 30}}>
                <Link>
                    <Text color={open ? "#00dcff" : "white"} size="16" weight="400" margin="margin: 15px 0px;">{head}</Text>
                </Link>
            </div>
            <Col width="100%">
                {array.map((item) => <Link key={item.link} margin="margin: 5px 0px;" href={item.link}><Text lh={18} size="14" weight="400" color="white">{item.title}</Text></Link>)}
            </Col>
            <Flex width={open ? '100%' : 0} height={'1px'} margin="margin-top: 20px" bg={"#00dcff"} style={{transition: 'all 500ms'}} />
        </Col>
    )
}

export const Category = ({postliston, setPostliston, categoryon, setCategoryon}) => {
    return (
        <Col justify="space-between" width="23%" height="100%" position="fixed" opacity={0.9} style={{right: categoryon ? 0 : '-23%', transition: 'all 200ms', overflowY: 'scroll'}} padding="padding: 50px 20px;" bg="rgb(0,3,9)" zIndex={1000}>
            <Flex to="cursor" onClick={() => setCategoryon(false)} style={{right: 20, top: 20}} position="absolute">
                <Close size={20} />
            </Flex>
            <Main head="Study" elements={
                <>
                    <Minor postliston={postliston} setPostliston={setPostliston} head="A.I" array={ai} />
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Blockchain" array={blockchain} />
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Math" array={math} />
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Application" array={application} />
                </>} />
            <Main head="Projects" elements={
                <>
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Object Detection" array={ai} />
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Protocol Economy / Blockchain" array={ai} />
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Brain Cognitive / GAN CNN" array={ai} />
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Kaggle" array={ai} />
                </>
            } />
            <Main head="Physics" elements={
                <>
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Modern Physics" array={physics.modern} />
                    <Minor postliston={postliston} setPostliston={setPostliston} head="Quantam Physics" array={physics.quantam} />
                </>
            } />
            <Main head="Steve Ive's Theory" elements={<Minor postliston={postliston} setPostliston={setPostliston} head="Universial Integration" array={steveivetheory} />} />
        </Col>
    );
};

export default Category;