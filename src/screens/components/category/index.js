import React, {useState} from 'react';
import {Flex, Col , Text, Link} from '../common/plain';
import ai from './lists/ai';
import blockchain from './lists/blockchain';
import steveivetheory from './lists/steveivetheory';
import physics from './lists/physics';
import math from './lists/math';
import application from './lists/application';
import {Close} from '../../../icons/close';

export const Main = ({head, elements}) => {
    return (
        <Col width="100%" margin="margin: 15px 0px;">
            <div style={{height: 30}}>
                <Link to={`/${head}`}>
                    <Text color="white" size="20" weight="700">{head}</Text>
                </Link>
            </div>
            {elements}
        </Col>
    )
}

const Minor = ({title, head, subhead, array, ai}) => {
    const [open, setOpen] = useState(false);
    return (
        <Col width="100%" padding="padding: 10px;" style={{height: ai ? open ? array.length * 35 + 35 + 20 : 32 : open ? array.length * 32 + 35 + 20 : 32, overflow: 'hidden', transition: 'all 300ms'}}>
            <div onClick={() => setOpen(!open)} style={{width: '100%', height: 30}}>
                <Link to={`/${head}/${subhead}`}>
                    <Text color={open ? "#00dcff" : "white"} size="16" weight="400" margin="margin: 15px 0px;">{title}</Text>
                </Link>
            </div>
            <Col width="100%">
                {array.map((item) => <Link to={item.link} key={item.link} margin="margin: 5px 0px;"><Text lh={18} size="14" weight="400" color="white">{item.title}</Text></Link>)}
            </Col>
            <Flex width={open ? '100%' : 0} height={'1px'} margin="margin-top: 20px" bg={"#00dcff"} style={{transition: 'all 500ms'}} />
        </Col>
    )
}

export const Category = ({categoryon, setCategoryon}) => {
    return (
        <Col justify="space-between" width="23%" position="fixed" opacity={0.9} style={{right: categoryon ? 0 : '-23%', transition: 'all 200ms', overflowY: 'scroll'}} padding="padding: 50px 20px;" bg="rgb(0,3,9)" zIndex={1000}>
            <Flex to="cursor" onClick={() => setCategoryon(false)} style={{right: 20, top: 20}} position="absolute">
                <Close size={20} />
            </Flex>
            <Main head="Study" elements={
                <>
                    <Minor head="study" title="A.I" subhead="ai" array={ai} />
                    <Minor head="study" title="Blockchain" subhead="blockchain" array={blockchain} />
                    <Minor head="study" title="Math" subhead="math" array={math} />
                    <Minor head="study" title="Application" subhead="application" array={application} />
                </>} />
            <Main head="Projects" elements={
                <>
                    <Minor head="projects" title="Object Detection" subhead="object-detection" array={ai} />
                    <Minor head="projects" title="Protocol Economy / Blockchain" subhead="protocol-economy" array={ai} />
                    <Minor head="projects" title="Brain Cognitive / GAN CNN" subhead="brain-cognitive" array={ai} />
                    <Minor head="projects" title="Kaggle" subhead="kaggle" array={ai} />
                </>
            } />
            <Main head="Physics" elements={
                <>
                    <Minor head="physics" title="Modern Physics" subhead="modern-physics" array={physics.modern} />
                    <Minor head="physics" title="Quantam Physics" subhead="quantam-physics" array={physics.quantam} />
                </>
            } />
            <Main head="Steve Ive's Theory" elements={<Minor head="steveive-theory" title="" subhead="Universial Integration" array={steveivetheory} />} />
        </Col>
    );
};

export default Category;