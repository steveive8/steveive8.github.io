import React, {useState} from 'react';
import {Flex, Col , Text, Link} from '../common/plain';
import ai from './lists/ai';
import blockchain from './lists/blockchain';
import projects from './lists/projects';
import steveivetheory from './lists/steveivetheory';
import physics from './lists/physics';
import math from './lists/math';
import application from './lists/application';
import {Close} from '../../../icons/close';
import ailibrary from './lists/ailibrary';

export const Main = ({setOpen, title, elements}) => {
    return (
        <Col width="100%" margin="margin: 15px 0px;">
            <div style={{height: 30}}>
                <Link onClick={() => setOpen(null)} to={`/${title}`}>
                    <Text color="white" size="20" weight="700">{title}</Text>
                </Link>
            </div>
            {elements}
        </Col>
    )
}

const Minor = ({open, opener, title, head, array}) => {
    return (
        <Col width="100%" padding="padding: 10px;" style={{height: open === title ? array.length * 30 + 35 + 20 : 32, overflow: 'hidden', transition: 'all 300ms'}}>
            <div onClick={() => opener(title)} style={{width: '100%', height: 30}}>
                <Link to={`/${head}/${title}`}>
                    <Text hovercolor="#00dcff" color={open === title ? "#00dcff" : "white"} size="16" weight="400" margin="margin: 15px 0px;">{title}</Text>
                </Link>
            </div>
            <Col width="100%">
                {array.map((item) => <Link to={item.link} key={item.link} margin="margin: 5px 0px;"><Text hovercolor="#00dcff" lh={18} size="14" weight="400" color="white">{item.title}</Text></Link>)}
            </Col>
            <Flex width={open ? '100%' : 0} height={'1px'} margin="margin-top: 15px" bg={"#00dcff"} style={{transition: 'all 500ms'}} />
        </Col>
    )
}

export const Category = ({categoryon, setCategoryon}) => {
    const [open, setOpen] = useState(null);
    const opener = (subhead) => {
        if(open !== subhead){
            return setOpen(subhead);
        } else {
            return setOpen(null)
        }
    }
    return (
        <Col justify="space-between" width="25%" position="fixed" opacity={0.9} style={{right: categoryon ? 0 : '-25%', transition: 'all 200ms', overflowY: 'scroll'}} padding="padding: 50px 20px;" bg="rgb(0,3,9)" zIndex={1000}>
            <Flex to="cursor" onClick={() => setCategoryon(false)} style={{right: 20, top: 20}} position="absolute">
                <Close size={20} />
            </Flex>
            <Main setOpen={setOpen} title="Study" elements={
                <>
                    <Minor open={open} opener={opener} head="Study" title="A.I" array={ai} />
                    <Minor open={open} opener={opener} head="Study" title="A.I Library" array={ailibrary} />
                    <Minor open={open} opener={opener} head="Study" title="Blockchain" array={blockchain} />
                    <Minor open={open} opener={opener} head="Study" title="Math" array={math} />
                    <Minor open={open} opener={opener} head="Study" title="Application" array={application} />
                </>} />
            <Main setOpen={setOpen} title="Projects" elements={
                <>
                    <Minor open={open} opener={opener} head="Projects" title="Object Detection" array={projects} />
                    <Minor open={open} opener={opener} head="Projects" title="Protocol Economy / Blockchain" array={projects} />
                    <Minor open={open} opener={opener} head="Projects" title="Brain Cognitive / GAN CNN" array={projects} />
                    <Minor open={open} opener={opener} head="Projects" title="Kaggle" array={projects} />
                </>
            } />
            <Main setOpen={setOpen} title="Physics" elements={
                <>
                    <Minor open={open} opener={opener} head="Physics" title="Modern Physics" array={physics.modern} />
                    <Minor open={open} opener={opener} head="Physics" title="Quantam Physics" array={physics.quantam} />
                </>
            } />
            <Main setOpen={setOpen} title="Steve Ive's Theory" elements={<Minor open={open} opener={opener} head="Steve Ive's Theory" title="Universial Theory" array={steveivetheory} />} />
        </Col>
    );
};

export default Category;