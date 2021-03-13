import React, {useState, useEffect} from 'react';
import {isMobile, BrowserView, MobileView, isMobileSafari} from 'react-device-detect';
import CircleBox from '../common/circle';
import {Width, Height} from '../../hooks/getWindow';
import { Col, Flex, Text } from '../common/plain';

const centerX = isMobile ? Width / 2 - 90 : Width / 2 - 115
const centerY = isMobile ? Height / 2 - 120 : Height / 2 - 180

export const Circle = ({page, setPage}) => {
    const [position, setPosition] = useState(Height);
    const [hover, setHover] = useState(null);
    const [next, setNext] = useState(false);
    useEffect(() => {
        page === 1 && !next && setTimeout(() => {
            setNext(true)
        }, 5000);
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
            x: isMobile ? centerX + 80 : centerX + 100,
            y: isMobile ? centerY + 80 : centerY + 100,
            size: isMobile ? 180 : 230,
            left: false,
            textsize: isMobile ? 15 : 20,
            textcolor: 'white',
            hovertextcolor: 'white',
            weight: '700',
            bg: 'rgba(75,75,75,0.85)',
            hovercolor: 'rgba(20,20,20,0.75)',
            hoverFunc: hoverer
        },
        {
            text: "Artificial Intelligence",
            x: centerX,
            y: isMobile ? centerY - 50 : centerY - 70,
            size: isMobile ? 180 : 230,
            textsize: isMobile ? 15 : 20,
            textcolor: 'white',
            hovertextcolor: 'white',
            weight: '700',
            bg: 'rgba(75,75,75,0.85)',
            hovercolor: 'rgba(20,20,20,0.75)',
            hoverFunc: hoverer
        },
        {
            text: "Blockchain",
            x: isMobile ? centerX - 80 : centerX - 100,
            y: isMobile ? centerY + 80 : centerY + 100,
            size: isMobile ? 180 : 230,
            top: false,
            textsize: isMobile ? 15 : 20,
            textcolor: 'white',
            hovertextcolor: 'white',
            weight: '700',
            bg: 'rgba(75,75,75,0.85)',
            hovercolor: 'rgba(20,20,20,0.75)',
            hoverFunc: hoverer
        }
    ]
    return (
        <Flex style={{width: '100vw', height: isMobileSafari ? '90vh' : '100vh', position: 'absolute', opacity: page === 1 ? 1 : 0, transition: 'opacity 1s', top: position}}>
            <CircleBox page={page} circles={circles} height={300} />
            <Description 
                hover={hover} 
                index={1}
                x={Width / 1.4}
                y={Height / 4}
                content={
                    <Col>
                        <Text weight="700" size="25" margin={"margin-bottom: 20px;"}>Artificial Intelligence</Text>
                        <Text weight="500" size="18" margin="margin-left: 10px; margin-bottom: 10px;">Deep Learning</Text>
                        <Text weight="500" size="18" margin="margin-left: 10px; margin-bottom: 10px;">Reinforcement Learning</Text>
                        <Text weight="500" size="18" margin="margin-left: 10px;">Computer Vision with CNN</Text>
                        <Text weight="700" size="18" margin={"margin: 20px 0px;"}>Mainly Stack to use</Text>
                        <Text weight="500" size="18" margin="margin-left: 10px; margin-bottom: 10px;">TensorFlow, Pytorch with Python</Text>
                        <Text weight="500" size="18" margin="margin-left: 10px; margin-bottom: 10px;">Open A.I</Text>
                    </Col>
                } />
            <Description 
                hover={hover} 
                index={0} 
                x={Width / 10}
                y={Height / 3}
                content={
                    <Col>
                        <Text weight="700" size="25" margin={"margin-bottom: 20px;"}>Service Design & Develop</Text>
                        <Text weight="500" size="18" margin="margin-left: 10px;">Web, iOS, Android (Cross Platform)</Text>
                        <Text weight="700" size="18" margin={"margin: 20px 0px;"}>Mainly Stack to use</Text>
                        <Text weight="700" size="18" margin="margin-bottom: 10px; margin-left: 10px;">FrontEnd</Text>
                        <Text weight="500" size="18" margin="margin-left: 20px; margin-bottom: 10px;">React.js, React Native, JS</Text>
                        <Text weight="700" size="18" margin="margin-bottom: 10px; margin-left: 10px;">BackEnd</Text>
                        <Text weight="500" size="18" margin="margin-left: 20px; margin-bottom: 10px;">Node.js, SQL, GraphQL</Text>
                    </Col>
                } />
            <Description 
                hover={hover} 
                index={2}
                x={Width / 1.4}
                y={Height / 2}
                content={
                    <Col>
                        <Text weight="700" size="25" margin={"margin-bottom: 20px;"}>Blockchain</Text>
                        <Text weight="500" size="18" margin="margin-left: 10px; margin-bottom: 5px;">Mission to Create</Text>
                        <Text weight="500" size="18" margin="margin-left 10px;">"Zero Marginal Cost Society"</Text>
                        <Text weight="700" size="18" margin={"margin: 20px 0px;"}>Mainly Stack to use</Text>
                        <Text weight="500" size="18" margin="margin-left: 10px; margin-bottom: 10px;">Ethereum Solidity</Text>
                    </Col>
                } />
                <Flex to={true} style={{opacity: next ? 1 : 0, transition: 'all 500ms', position: 'absolute', bottom: 38, right: 38}}>
                    <Text weight="600" onClick={() => setPage(2)}>
                        Next &gt;
                    </Text>
                </Flex>
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