import React, {useState} from 'react';
import styled from 'styled-components';
import {Col, Row, Text, Flex} from '../../components/common/plain';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';

export const Con = ({}) => {
    return (
        <Text>
            <LoremIpsum p={3} />
        </Text>
    )
}

export default Con;