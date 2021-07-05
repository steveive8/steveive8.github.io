import React, {useState, useEffect} from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
    isMobileSafari,
  } from "react-device-detect";
import {Text, Flex, Col} from '../../components/plain';
import styled from 'styled-components';
import {Height, Width} from '../../../hooks/getWindow';

const heighter = (on, index) => {
    if (on < index) {
        return -Height;
    } else if (on === index) {
        return 0
    } else if (on > index) {
        return Height;
    }
}

const sider = (sideOn, index) => {
    if (sideOn < index) {
        return -Width;
    } else if (sideOn === index) {
        return 0;
    } else if (sideOn > index) {
        return Width;
    }
}

const Sider = styled(Flex)`
    position: relative;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.sideOn === props.index ? 1: 0};
    transition: right 1s ease-in-out, opacity 1s ease-in-out;
    right: ${props => sider(props.sideOn, props.index)}px;
`;

const Fader = styled(Col)`
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.on === props.index ? 1 : 0};
    transition: bottom 1s ease-in-out, opacity 1.5s ease-in-out;
    bottom: ${props => heighter(props.on, props.index)}px;
`;

const HeaderText = styled(Text)`
    font-size: ${isMobile ? 35 : 55}px;
    line-height: ${isMobile ? 40 : 55}px;
    font-weight: 700;
    color: white;
    margin-bottom: ${props => props.siderText ? 0 : 18}px;
    display: block;
    align-items: center;
    text-align: ${props => props.service && 'center'};
`;

const SiderText = styled(Text)`
    font-size: ${isMobile ? 25 : 45}px;
    font-weight: 700;
    color: white;
    text-align: center;
    line-height: ${isMobile ? 25 : 50}px;
`;


export const Fade = ({on, siderOn, headerText, siderText, index}) => {
    return (
       <Fader on={on} index={index}>
            <HeaderText siderText={siderText}>
                {headerText}
            </HeaderText>
            <Sider sideOn={siderOn} index={index}>
                {siderText}
            </Sider>
        </Fader>
    )
}

export const Head = ({page, setPage}) => {
    const [on, setOn] = useState(0);
    const [siderOn, setSiderOn] = useState(0);
    const [position, setPosition] = useState(0);
    useEffect(() => {
        if (page !== 0) {
            return setTimeout(() => {
                setPosition(Height);
            }, 1000);
        } else {
            setPosition(0);
        }
        const animate = () => {
            on === 0 && setTimeout(() => {
                setOn(1);
            }, 300);
            on === 1 && setTimeout(() => {
                setOn(2);
            }, 3000);
            on === 2 && setTimeout(() => {
                setSiderOn(3);
                setOn(3);
            }, 3000);
            on === 3 && setTimeout(() => {
                setSiderOn(4);
                setOn(4);
            }, 3000);
            on === 4 && setTimeout(() => {
                setSiderOn(5);
                setOn(5);
            }, 3000);
            on === 5 && setTimeout(() => {
                setSiderOn(6);
                setOn(6);
                return setTimeout(() => {
                    setPage(1);
                }, 3000);
            }, 3000);
        }
        animate();
    }, [on, page, setPage])
    const contents = [
        {
            header: <HeaderText mobile={isMobile}>Hello! {isMobile && <br></br>} My name is Steve Ive</HeaderText>,
        },
        {
            header: <HeaderText>Welcome to {isMobile && <br></br>}Steve Ive's Space.</HeaderText>,
        },
        {
            header: <HeaderText>I'm interested In...</HeaderText>,
        },
        {
            header: <HeaderText>Artificial Intelligence</HeaderText>,
            sider: <SiderText>Deep Learning, {isMobile && <br></br>}Reinforcement Learning</SiderText>
        },
        {
            header: <HeaderText service={true}>Service {isMobile && <br></br>} Design & Develop</HeaderText>,
            sider: <SiderText>Full Stack Engineering</SiderText>
        },
        {
            header: <HeaderText>Blockchain</HeaderText>,
            sider: <SiderText>"Zero Marginal Cost Society"<br></br>Decentralized Protocal</SiderText>
        },
    ]
    return (
        <Flex width='100%' height={isMobileSafari ? "90vh" : "100vh"} align="center" justify="center" style={{position: 'fixed', top: position, opacity: page === 0 ? 1 : 0, overflow: 'hidden', transition: 'opacity 1s'}}>
            {contents.map((item, index) => <Fade key={index} on={on} siderOn={siderOn} index={index + 1} bottom={-Height} headerText={item.header} siderText={item.sider} />)}
        </Flex>
    )
}

export default Head;