import React, {useState} from 'react';
import {Col, Row, Text, Flex, Image} from './plain';
import {Left, Right, SteveIve, AI, Quantaum, Relativity, Dev, Blockchain} from '../../icons/dock';
import Github from '../../imgs/git.png';
import Buddha from '../../imgs/buddha.png';

export const DockBar = ({scroll, category, setCategory}) => {
    const [fix, setFix] = useState(false);
    return (
        <Col zIndex={1000} position="fixed" width="80vw" margin="margin: 0px 10vw" height="80px;" align="center" justify="flex-end" style={{bottom: 0, transition: 'all 500ms'}}>
            <Col width="100%" align="center" justify="center">
                <Row width="90%" align="flex-end" justify="space-around" position="absolute" style={{bottom: 10}} zIndex={100000}>
                    <Icon title="Home" src={<SteveIve height="100%" />} />
                    <Icon title="Deep Learning" src={<AI height="100%" />} />
                    <Icon title="Blockchain" src={<Blockchain height="100%" />} />
                    <Icon title="Relativity" src={<Relativity height="100%" />} />
                    <Icon title="Quantaum" src={<Quantaum height="100%" />} />
                    <Icon title="Develop" src={<Dev height="100%" />} />
                    <a href="https://www.github.com/steveive8">
                        <Icon title="Github" src={<Image height="60%" src={Github} />} />
                    </a>
                    <Icon title="About Me" src={<Image src={Buddha} height="60%" />} />
                </Row>
                <Row width="100%" align="center" justify="center">
                    <Flex position="relative" style={{left: 0.2}}>
                        <Left height="50" />
                    </Flex>
                    <Flex width="80%" height="49px" bg="rgba(38,38,38,0.97)" />
                    <Flex position="relative" style={{right: 0.2}}>
                        <Right height="50" />
                    </Flex>
                </Row>
            </Col>
        </Col>
    )
};

export default DockBar;

export const Icon = ({src, title}) => {
    const [hover, setHover] = useState(false);
    return (
        <Col onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} style={{overflow: 'hidden'}} to="cursor" align="center" width="125px" justify="flex-end" height={hover ? "72px" : "65px"} zIndex={100000}>
            {src}
            <Text style={{textAlign: 'center', marginLeft: title === "Home" ? 5 : 0, transition: 'all 500ms'}} lh={17} margin={`margin-top: ${hover ? 3 : 8}px`} weight="500" size="14">{title}</Text>
        </Col>
    )
}