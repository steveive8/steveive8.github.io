import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Flex, Text } from './plain';
import getWindow from '../../hooks/getWindow';

const circlesize = getWindow(10, 1, 1).width;

const CircleFlex = styled(Flex)`
    position: absolute;
    right: ${props => props.position.X}px;
    top: ${props => props.position.Y}px;
    transition: right ${props => props.speed}ms, top ${props => props.speed}ms, opacity 1000ms;
    opacity: ${props => props.opacity};
    :hover {
        background-color: ${props => props.hovercolor? props.hovercolor: 'black'};
        z-index: 10;
        span {
            font-size: ${props => props.hoversize ? props.hoversize : 25}px;
            color: ${props => props.hovertextcolor? props.hovertextcolor : 'black'};
            transition: all 300ms;
        };
    };
`;

export const Circle = ({hoverFunc, index, page, x, y, hoversize, left = true, top = true, initX, initY, text, speed = '500', textsize, size = circlesize, bg = 'rgb(17,17,17)', weight = '500', textcolor = 'white', hovercolor, hovertextcolor}) => {
    const [position, setPosition] = useState({X: initX ? initX : x - size * 3, Y: initY ? initY : y - size * 3})
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        const animate = () => {
            setPosition({X: x, Y: y})
            setOpacity(1);
            setTimeout(() => {
                setPosition({X: x, Y: !top ? y - size / 7 : y + size / 7});
            }, 300);
            setTimeout(() => {
                setPosition({X: !left ? x - size / 8 : x + size / 8, Y: y});
            }, 500);
            setTimeout(() => {
                setPosition({X: x, Y: top ? y - size / 9 : y + size / 9});
            }, 600);
            setTimeout(() => {
                setPosition({X: left ? x - size / 10 : x + size / 10, Y: y});
            }, 700);
            setTimeout(() => {
                setPosition({X: x, Y: y});
            }, 750);
        }
        page === 1 && animate();
    },[size, left, top, x, y, page])
    return (
        <CircleFlex onMouseOver={() => hoverFunc && hoverFunc(index, true)} onMouseOut={() => hoverFunc && hoverFunc(index, false)} hoversize={hoversize} position={position} opacity={opacity} speed={speed} circle={true} to={true} bg={bg} align="center" justify="center" size={size+'px'} hovercolor={hovercolor} hovertextcolor={hovertextcolor}>
            <Text size={textsize} style={{textAlign: 'center'}} weight={weight} color={textcolor}>{text}</Text>
        </CircleFlex>
    )
}

export const CircleBox = ({page, width = '100%', height, bg = 'rgba(0,0,0,0)', circles, initX, initY}) => {
    return (
        <Flex position="relative" width={width} height={height} bg={bg}>
            {circles.map((item, index) => 
                <Circle
                    page={page}
                    hoverFunc={item.hoverFunc}
                    size={item.size}
                    x={item.x}
                    y={item.y}
                    left={item.left}
                    top={item.top}
                    key={index}
                    initX={initX}
                    index={index}
                    initY={initY}
                    speed={item.speed}
                    hoversize={item.hoversize}
                    bg={item.bg} 
                    text={item.text} 
                    weight={item.weight} 
                    hovercolor={item.hovercolor}
                    hovertextcolor={item.hovertextcolor}
                    textsize={item.textsize} 
                    textcolor={item.textcolor} 
                />)}
        </Flex>
    )
}

export default CircleBox;