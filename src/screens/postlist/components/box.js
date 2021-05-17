import React from 'react';
import styled from 'styled-components';
import {Col, Row, Text, Flex, Image, Link} from '../../components/common/plain';

export const Box = ({title, subtitle, src, link}) => {
    return (
        <Link href={link} style={{flex: 1}}>
            <Flex height="180px" margin="margin: 10px;" br="20px" style={{overflow: 'hidden'}} align="center" justify="center">
                {src && <Image src={src} height="100%" width="100%" of="cover" />}
                <Col height={src ? '50%' : '100%'} width="100%" padding="padding: 10px;" bg="rgb(20,20,20)">
                    <Text weight="400" size="17" lh={18}>
                        {title}
                    </Text>
                    <Text size="15" weight="400" margin="margin-top: 10px;">{subtitle}</Text>
                </Col>
            </Flex>
        </Link>
    )
}

export default Box;