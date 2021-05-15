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
    const [open, setOpen] = useState(false);
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

const Minor = ({head, array, ai}) => {
    const [open, setOpen] = useState(false);
    return (
        <Col width="100%" padding="padding: 10px;" style={{height: ai ? open ? array.length * 35 + 35 : 32 : open ? array.length * 32 + 35 : 32, overflow: 'hidden', transition: 'all 300ms'}}>
            <div onClick={() => setOpen(!open)} style={{width: '100%', height: 30}}>
                <Link>
                    <Text color="white" size="16" weight="400" margin="margin: 15px 0px;">{head}</Text>
                </Link>
            </div>
            <Col width="100%">
                {array.map((item) => <Link margin="margin: 5px 0px;" href={item.link}><Text lh={18} size="14" weight="400" color="white">{item.title}</Text></Link>)}
            </Col>
        </Col>
    )
}

export const Category = ({categoryon, setCategoryon}) => {
    return (
        <Col width="23%" height="100%" position="fixed" opacity={0.9} style={{right: categoryon ? 0 : '-23%', transition: 'all 200ms', overflowY: 'scroll'}} padding="padding: 20px;" bg="rgb(0,3,9)" zIndex={1000}>
            <Flex to="cursor" onClick={() => setCategoryon(false)} style={{right: 20, top: 20}} position="absolute">
                <Close size={20} />
            </Flex>
            <Main head="Study" elements={
                <>
                    <Minor head="A.I" array={ai} />
                    <Minor head="Blockchain" array={blockchain} />
                    <Minor head="Application" array={application} />
                </>} />
            <Main head="Projects" elements={
                <>
                    <Minor head="Object Detection" array={ai} />
                    <Minor head="Protocol Economy / Blockchain" array={ai} />
                    <Minor head="Brain Cognitive / GAN CNN" array={ai} />
                    <Minor head="Kaggle" array={ai} />
                </>
            } />
            <Main head="Physics" elements={
                <>
                    <Minor head="Modern Physics" array={physics.modern} />
                    <Minor head="Quantam Physics" array={physics.quantam} />
                </>
            } />
            <Main head="Steve Ive's Theory" elements={<Minor head="Universial Integration" array={steveivetheory} />} />
        </Col>
    );
};

export default Category;