import React, {useState, useEffect} from 'react';
import {Text, Flex, Col} from '../common/plain';
import styled from 'styled-components';
import {Height, Width} from '../../hooks/getWindow';

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
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.on === props.index ? 1 : 0};
    transition: bottom 1s ease-in-out, opacity 1.5s ease-in-out;
    bottom: ${props => heighter(props.on, props.index)}px;
`;

const HeaderText = styled(Text)`
    font-size: 55px;
    font-weight: 700;
    color: white;
    margin-bottom: ${props => props.siderText ? 0 : 25}px;
    display: block;
`;

const SiderText = styled(Text)`
    font-size: ${props => props.size ? props.size : 45}px;
    font-weight: 700;
    color: white;
    text-align: center;
    line-height: 45px;
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
            header: <HeaderText>Hello! My name is John Leo</HeaderText>,
        },
        {
            header: <HeaderText>Welcome to John Leo's Space.</HeaderText>,
        },
        {
            header: <HeaderText>I'm interested In...</HeaderText>,
        },
        {
            header: <HeaderText>Artificial Intelligence</HeaderText>,
            sider: <SiderText>Deep Learning, Reinforcement Learning</SiderText>
        },
        {
            header: <HeaderText>Service Design & Develop</HeaderText>,
            sider: <SiderText>Full Stack Engineering</SiderText>
        },
        {
            header: <HeaderText>Blockchain</HeaderText>,
            sider: <SiderText size={40}>"Zero Marginal Cost Society"<br></br>Decentralized Protocal</SiderText>
        },
    ]
    return (
        <Flex width='100vw' height="100vh" align="center" justify="center" style={{position: 'absolute', top: position, opacity: page === 0 ? 1 : 0, overflowY: 'disabled', transition: 'opacity 1s'}}>
            {contents.map((item, index) => <Fade key={index} on={on} siderOn={siderOn} index={index + 1} bottom={-Height} headerText={item.header} siderText={item.sider} />)}
        </Flex>
    )
}

export default Head;