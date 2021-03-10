import React from 'react';
import { Flex, Col, Row, Text, Image } from '../common/plain';
import styled from 'styled-components';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';

const Box = styled(Flex)`
    border-radius: 20px;
    width: ${isMobile ? '100%' : 300 + 'px'};
    height: 180px;
    background-color: rgb(23,23,23);
    margin-right: 15px;
    :hover {
        cursor: pointer;
        opacity: 0.85;
    };
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
`;

export const Project = ({title, description, imgsrc, date}) => {
    return (
        <Box>
            <Flex padding="padding: 10px;" style={{position: 'absolute', width: '65%', right: 0, top:0, height: '100%', flexDirection: 'column'}} bg="rgba(23,23,23, 0.85)">
                <Text lh="25" weight="700" size="20" margin="margin-bottom: 8px;">{title}</Text>
                <Text lh="20" style={{maxHeight: 80, overflow: 'hidden'}} weight="400">{description}</Text>
                <Text weight="300" color="rgb(180,180,180)" margin="margin-top: 8px;">{date}</Text>
            </Flex>
            <Image src={imgsrc} width="100%" height="100%" of="cover" />
        </Box>
    )
}

export const Mission = ({}) => {
    return (
        <>
            <BrowserView>
                <Col padding="padding: 0px 60px;">
                    <Row align="center" width="100%" margin="margin-bottom: 50px;" justify="space-between">
                        <Text size="30" weight="700" >Recent Work</Text>
                        <Text size="18" weight="500" to={true} us="none" color="rgb(180,180,180)" margin="margin-right: 20px; padding-top: 10px;">See All</Text>
                    </Row>
                    <Row align="center" justify="center">
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                    </Row>
                    <Row align="center" justify="center">
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                    </Row>
                    <Row align="center" justify="center">
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                        <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                    </Row>
                </Col>
            </BrowserView>
            <MobileView>
                <Row align="center" width="100%" justify="space-between" margin="margin-bottom: 30px;">
                    <Text size="30" weight="700">Recent Work</Text>
                    <Text size="18" weight="500" to={true} us="none" color="rgb(180,180,180)" margin="margin-right: 20px;">See All</Text>
                </Row>
                <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
                <Project title="YOLOv3 implement" description="Yolov3 is the real time object detection model that is the most fastest model ever since the deep learning introduced." date="2020-12-21" imgsrc="https://cdn.pixabay.com/photo/2021/02/07/09/11/sunset-5990540_1280.jpg" />
            </MobileView>
        </>
    )
};

export default Mission;