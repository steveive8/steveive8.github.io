import React, {useState, useEffect} from 'react';
import {isMobile, BrowserView, MobileView, isMobileSafari} from 'react-device-detect';
import CircleBox from './circlebox';
import {Width, Height} from '../../../hooks/getWindow';
import { Col, Flex, Link, Text } from '../../components/plain';


const centerX = isMobile ? Width / 2 - 90 : Width / 2 - 115
const centerY = isMobile ? Height / 2 - 120 : Height / 2 - 180

export const Circle = ({page, setPage}) => {
    const [position, setPosition] = useState(Height);
    const [hover, setHover] = useState(1);
    const [next, setNext] = useState(false);
    useEffect(() => {
        page === 1 && !next && setTimeout(() => {
            setNext(true)
        }, 3000);
    });
    useEffect(() => {
        if (page === 1){
            setPosition(0);
        } else {
            setPosition(Height);
        };
    }, [page]);
    const hoverer = (index, bool) => {
        if (bool){
            setHover(index);
        } else {
            setHover(null);
        }
    }
    const circles = [
        {
            text: "Design & Develop",
            x: isMobile ? centerX + 80 : centerX + 310,
            y: isMobile ? centerY + 80 : centerY + 100,
            size: isMobile ? 180 : 230,
            left: false,
            textsize: isMobile ? 15 : 20,
            textcolor: 'white',
            hovertextcolor: 'white',
            weight: '700',
            bg: 'rgba(80,80,80,0.85)',
            hovercolor: 'rgba(20,20,20,0.85)',
            hoverFunc: hoverer
        },
        {
            text: "Artificial Intelligence",
            x: centerX + 210,
            y: isMobile ? centerY - 50 : centerY - 70,
            size: isMobile ? 180 : 230,
            textsize: isMobile ? 15 : 20,
            textcolor: 'white',
            hovertextcolor: 'white',
            weight: '700',
            bg: 'rgba(80,80,80,0.85)',
            hovercolor: 'rgba(20,20,20,0.85)',
            hoverFunc: hoverer
        },
        {
            text: "Blockchain",
            x: isMobile ? centerX - 80 : centerX + 110,
            y: isMobile ? centerY + 80 : centerY + 100,
            size: isMobile ? 180 : 230,
            top: false,
            textsize: isMobile ? 15 : 20,
            textcolor: 'white',
            hovertextcolor: 'white',
            weight: '700',
            bg: 'rgba(80,80,80,0.85)',
            hovercolor: 'rgba(20,20,20,0.85)',
            hoverFunc: hoverer
        }
    ]
    return (
        <Flex style={{width: '100vw', height: isMobileSafari ? '80vh' : '100vh', position: 'fixed', overflow: 'hidden', opacity: page === 1 ? 1 : 0, transition: 'opacity 1s', top: position}}>
            <CircleBox page={page} circles={circles} height={'100%'} />
            <Description 
                hover={hover} 
                index={1}
                x={Width / 1.6}
                y={Height / 3.2}
                content={
                    <Col align="center">
                        <Text weight="700" size="25" margin={"margin-bottom: 20px;"}>Artificial Intelligence</Text>
                        <Text weight="500" size="18" margin="margin-bottom: 10px;">Deep Learning</Text>
                        <Text weight="500" size="18" margin="margin-bottom: 10px;">Reinforcement Learning</Text>
                        <Text weight="500" size="18">Computer Vision with CNN</Text>
                        <Text weight="700" size="18" margin={"margin-top: 30px; margin-bottom: 10px;"}>Mainly Stack to use</Text>
                        <Text weight="500" size="18" margin="margin-bottom: 10px;">TensorFlow, Pytorch, Open A.I</Text>
                    </Col>
                } />
            <Description 
                hover={hover} 
                index={0} 
                x={Width / 1.6}
                y={Height / 3}
                content={
                    <Col align="center">
                        <Text weight="700" size="25" margin={"margin-bottom: 20px;"}>Service Design & Develop</Text>
                        <Text weight="500" size="18">Web, iOS, Android (Cross Platform)</Text>
                        <Text weight="700" size="18" margin={"margin-top: 30px; margin-bottom: 10px;"}>Mainly Stack to use</Text>
                        <Text weight="500" size="18" margin="margin-bottom: 10px;">
                            <Text weight="700" size="18" margin="margin-right: 10px;">FrontEnd</Text>
                            React.js, React Native, JS</Text>
                        
                        <Text weight="500" size="18" margin="margin-bottom: 10px;">
                            <Text weight="700" size="18" margin="margin-right: 10px;">BackEnd</Text>
                            Node.js, SQL, GraphQL
                        </Text>
                    </Col>
                } />
            <Description 
                hover={hover} 
                index={2}
                x={Width / 1.6}
                y={Height / 3}
                content={
                    <Col align="center">
                        <Text weight="700" size="25" margin={"margin-bottom: 20px;"}>Blockchain</Text>
                        <Text weight="500" size="18" margin="margin-bottom: 5px;">Mission to Create</Text>
                        <Text weight="500" size="18">"Zero Marginal Cost Society"</Text>
                        <Text weight="700" size="18" margin={"margin-top: 30px; margin-bottom: 10px;"}>Mainly Stack to use</Text>
                        <Text weight="500" size="18" margin="margin-bottom: 10px;">Ethereum Solidity</Text>
                    </Col>
                } />
        </Flex>
    )
}

const Description = ({hover, index, content, x, y}) => {
    return (
        <Flex style={{opacity: hover === index ? 1 :0, transition: 'all 300ms', position: 'absolute', left: x, top: y}}>
            {content}
        </Flex>
    )
}

export default Circle;