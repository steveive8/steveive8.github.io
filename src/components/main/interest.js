import React, {useState, useEffect} from 'react';
import {Col, Row, Flex, Text, Image} from '../common/plain';
import CircleBox from '../common/circle';
import {isMobile} from 'react-device-detect';
import {Height, Width} from '../../hooks/getWindow';

const Repo = ({list}) => {
    return (
        <Col width="50%" height="100%" margin="margin-top: 80px;">
            <Row margin="margin-bottom: 20px;">
                <Image margin="margin: 0px 10px;" width="43%" src={list[0]} />
                <Image margin="margin: 0px 10px;" width="43%" src={list[1]} />
            </Row>
            {list.length > 2 && <Row margin="margin-bottom: 20px;">
                <Image margin="margin: 0px 10px;" width="43%" src={list[2]} />
                <Image margin="margin: 0px 10px;" width="43%" src={list[3]} />
            </Row>}
            {list.length > 4 && <Row margin="margin-bottom: 20px;">
                <Image margin="margin: 0px 10px;" width="43%" src={list[4]} />
                <Image margin="margin: 0px 10px;" width="43%" src={list[5]} />
            </Row>}
        </Col>
    )
}

export const Interest = ({}) => {
    const [now, setNow] = useState("A.I");
    const list = [
        "https://github-readme-stats.vercel.app/api/pin/?username=johnsteve108&repo=Koreagram&theme=react",
        "https://github-readme-stats.vercel.app/api/pin/?username=johnsteve108&repo=Koreagram&theme=react",
        "https://github-readme-stats.vercel.app/api/pin/?username=johnsteve108&repo=Koreagram&theme=react",
        "https://github-readme-stats.vercel.app/api/pin/?username=johnsteve108&repo=Koreagram&theme=react",
        "https://github-readme-stats.vercel.app/api/pin/?username=johnsteve108&repo=Koreagram&theme=react",
        "https://github-readme-stats.vercel.app/api/pin/?username=johnsteve108&repo=Koreagram&theme=react",
    ]
    return (
        <Col width="100vw" height="80vh" style={{position: 'absolute', top: '100vh'}}>
            <Row align="center" margin="margin: 45px;">
                <Text weight="700" size="45" margin="margin-right:10px">I'm interested in</Text>
                <Text weight="700" size="45">{now}</Text>
            </Row>
            <Repo list={list} />
        </Col>
    );
}

export default Interest;