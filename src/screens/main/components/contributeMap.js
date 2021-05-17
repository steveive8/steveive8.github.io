import React, {useState} from 'react';
import { Col, Flex, Image, Row, Text } from '../common/plain';
import CircleBox from '../common/circle';
import {Width, Height} from '../../../hooks/getWindow';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';

const centerX = Width / 2
const centerY = Height / 10;

const positioner = (x, arg) => {
    return x ? centerX + arg * 1.5 : centerY + arg * 1.5
}

export const ContributeMap = ({categoryOn, page}) => {
    const circles = [
        {
            text: "#Blockchain",
            x: !isMobile ? centerX + Width / 5 : positioner(true, Width / 8),
            y: !isMobile ? centerY + Height / 20 : positioner(false, Height / 20),
            size: 180,
            left: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#Ethereum",
            x: !isMobile ? centerX + Width / 8 : positioner(true, - Width / 8),
            y: !isMobile ? centerY + Height / 8 : positioner(false, - Height / 8),
            size: 150,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#Deep Learning",
            x: !isMobile ? centerX + Width / 10 : positioner(true, Width / 10),
            y: !isMobile ? centerY - Height / 20 : positioner(false, - Height / 10),
            size: 175,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#CNN",
            x: !isMobile ? centerX - Width / 8 : positioner(true, - Width / 5),
            y: !isMobile ? centerY + Height / 9 : positioner(false, Height / 9),
            size: 180,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#YOLO",
            x: !isMobile ? centerX - Width / 5 : positioner(true, - Width / 3),
            y: !isMobile ? centerY + Height / 8 : positioner(false, Height / 20),
            size: 130,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#React.js",
            x: !isMobile ? centerX - Width / 3 : positioner(true, - Width / 2),
            y: !isMobile ? centerY + Height / 12 : positioner(false, Height / 12),
            size: 170,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#RNN",
            x: !isMobile ? centerX - Width / 3.8 : positioner(true, - Width / 2),
            y: !isMobile ? centerY - Height / 20 : positioner(false, - Height / 12),
            size: 150,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#Reinforcement Learning",
            x: !isMobile ? centerX : positioner(true, 0),
            y: !isMobile ? centerY + Height / 7 : positioner(false, Height / 7),
            size: 170,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#Artificial Intelligence",
            x: !isMobile ? centerX - Width / 20 : positioner(true, - Width / 10),
            y: !isMobile ? centerY - Height / 25 : positioner(false, - Height / 25),
            size: 200,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        },
        {
            text: "#GraphQL",
            x: !isMobile ? centerX - Width / 7 : positioner(true,- Width / 3),
            y: !isMobile ? centerY - Height / 20 : positioner(false, - Height / 17),
            size: 150,
            top: false,
            textsize: 20,
            weight: '700',
            hovertextcolor: 'white',
            hovercolor: 'rgb(20,20,20,0.75)',
            textcolor: 'white',
            bg: 'rgba(75,75,75,0.75)',        }
    ]
    return (
        <>
        <BrowserView>
            <Col width="100%" height={'450px'}>
                <Text weight="700" size="30" style={{position: 'relative', left: Width / 20}}>Contribute Map</Text>
                <Row align="center" style={{left: categoryOn ? '15%' : '10.8%', position: 'relative', width: '100%', transform:  categoryOn && 'scale(0.8)', transition: 'all 300ms'}}>
                    <CircleBox page={page === 2 ? 1 : 0} circles={circles} height={'100%'} />
                    <Image style={{width: '25%', position: 'relative', right: '15%', top: '25%'}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=johnsteve108&theme=dark&langs_count=8)](https://github.com/johnsteve108/github-readme-stats)" />
                </Row>
            </Col>
        </BrowserView>
        <MobileView>
            <Text weight="700" size="30" style={{position: 'relative'}}>Contribute Map</Text>
            <Col width="100%" height={'700px'}>
                <Flex style={{padding: 15, position: 'relative', width: '100%', height: '55%', transform: 'scale(0.6)'}}>
                    <CircleBox page={page === 2 ? 1 : 0} circles={circles} />
                </Flex>
                <Image style={{width: '100%', position: 'relative'}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=johnsteve108&theme=dark&langs_count=8)](https://github.com/johnsteve108/github-readme-stats)" />
            </Col>
        </MobileView>
        
        </>
    )
};

export default ContributeMap;