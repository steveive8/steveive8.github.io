import React, {useState, useEffect} from 'react';
import {Col, Row, Flex, Text, Image} from '../common/plain';
import styled from 'styled-components';
import CircleBox from '../common/circle';
import {isMobile} from 'react-device-detect';
import getWindow, {Height, Width} from '../../hooks/getWindow';
import Logo from '../../imgs/sunset.webp';

const itemsize = getWindow(23, 1, 0.8);

const Link = styled.a`
    cursor: pointer;
    color: white;
    :hover {
        opacity: 0.85;
    }
`;

const Item = ({src, href, title, description}) => {
    return (
        <Link href={href}>
            <Flex height={itemsize.height+'px'} width={itemsize.width+"px"} position="relative" margin={"margin: 15px;"} br="20px" style={{overflow: 'hidden'}}>
                <Image src={src} width="100%" height="100%" of="cover" />
                <Col width="100%" height="35%" bg="rgba(10,10,10,0.85)" style={{position: 'absolute', bottom: 0, left: 0}} padding={'padding: 10px;'}>
                    <Text weight="500" size="18" margin="margin-bottom: 3px;">{title}</Text>
                    <Text lh="16" size="14">{description}</Text>
                </Col>
            </Flex>
        </Link>
    )
}

const Mover = styled(Row)`
    @keyframes move {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
    }
    
    @-moz-keyframes move {
        from {
            -moz-transform: translateX(0);
        }
        to {
            -moz-transform: translateX(100%);
        }
    }
    
    @-webkit-keyframes move {
        from {
            -webkit-transform: translateX(0);
        }
        to {
            -webkit-transform: translateX(100%);
        }
    }
`;

const Moving = ({list, speed}) => {
    return (
        <Mover width='100%' align="center" height="100%" style={{overflow: 'hidden', animation: `move ${speed} linear infinite`}}>
            {list.map((item, index) => <Item src={item.src} href={item.href} title={item.title} description={item.description} key={index} />)}
        </Mover>
    )
}

export const Interest = ({}) => {
    const [now, setNow] = useState("I'm interested in ...");
    useEffect(() => {
        const animate = () => {
            now === "I'm interested in ..." && setTimeout(() => {
                setNow("A.I")
            }, 2500);
            now === "A.I" && setTimeout(() => {
                setNow("Blockchain")
            }, 2500);
            now === "Blockchain" && setTimeout(() => {
                setNow("Design")
            }, 2500);
            now === "Design" && setTimeout(() => {
                setNow("React.js")
            }, 2500);
            now === "React.js" && setTimeout(() => {
                setNow("GraphQL")
            }, 2500);
            now === "GraphQL" && setTimeout(() => {
                setNow("Buddhism")
            }, 2500);
            now === "Buddhism" && setTimeout(() => {
                setNow("Physics")
            }, 2500);
            now === "Physics" && setTimeout(() => {
                setNow("Deep Learning")
            }, 2500);
            now === "Deep Learning" && setTimeout(() => {
                setNow("CNN")
            }, 2500);
            now === "CNN" && setTimeout(() => {
                setNow("Reinforcement Learning")
            }, 2500);
            now === "Reinforcement Learning" && setTimeout(() => {
                setNow("I'm interested in ...")
            });
        }
        animate();
    })
    const list = [
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        },
        {
            src: Logo,
            title: 'Apple Special Event',
            description: "Apple got Special Event today. I don't give a shit. of course. fjlsdkajflddsjf jdfsajfd"
        }
    ];
    return (
        <Col width="100vw" height="80vh" style={{position: 'absolute', top: '100vh'}} padding="padding-top: 85px;" align="center" justify="center">
            <Row align="center" justify="center" padding="padding-top: 50px;">
                <Flex position="absolute" width="100%" align="center" justify="center" style={{top: '60%'}}>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "I'm interested in ..." ? 1 : 0, transition: 'all 300ms'}}>I'm interested in ...</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "A.I" ? 1 : 0, transition: 'all 300ms'}}>A.I</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "Blockchain" ? 1 : 0, transition: 'all 300ms'}}>Blockchain</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "Design" ? 1 : 0, transition: 'all 300ms'}}>Design</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "React.js" ? 1 : 0, transition: 'all 300ms'}}>React.js</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "GraphQL" ? 1 : 0, transition: 'all 300ms'}}>GraphQL</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "Deep Learning" ? 1 : 0, transition: 'all 300ms'}}>Deep Learning</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "CNN" ? 1 : 0, transition: 'all 300ms'}}>CNN</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "Buddhism" ? 1 : 0, transition: 'all 300ms'}}>Buddhism</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "Physics" ? 1 : 0, transition: 'all 300ms'}}>Physics</Text>
                    <Text weight="700" size="45" style={{position: 'absolute', opacity: now === "Open A.I" ? 1 : 0, transition: 'all 300ms'}}>Open A.I</Text>
                </Flex>
            </Row>
            <Col height="100%" position="relative" style={{top: '-10%'}}>
                <Row height="100%" >
                    <Moving list={list.slice(0, 5)} speed="17s" />
                    <Moving list={list.slice(0, 5)} speed="17s" />
                    <Moving list={list.slice(0, 5)} speed="17s" />
                </Row>
                <Row  height="100%" position="relative" style={{right: '10%', top: '12%'}}>
                    <Moving list={list.slice(5, 10)} speed="17s" />
                    <Moving list={list.slice(5, 10)} speed="17s" />
                    <Moving list={list.slice(5, 10)} speed="17s" />
                </Row>
            </Col>
        </Col>
    );
}

export default Interest;