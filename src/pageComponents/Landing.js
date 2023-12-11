import React from "react";
import styled from "styled-components";
import {ReactComponent as ImgCalendar} from '../assets/calendar.svg';

export default function Landing(){
    return(
        <Container>
            <TextBlock>
                <H1>Upcoming crypto events calendar</H1>
                <Caption>Follow the world of blockchain with our cryptocalendar.<br/>
                 Here are all the main events related to crypto. Updates daily.</Caption>
            </TextBlock>
                <ImgCalendar color="#868D9A" fill="#868D9A" alt="calendar"/>

        </Container>
    )
}

const Container = styled.div`
display: flex;
width: 100%;
gap: 160px;
align-items: center;
justify-content: center;

@media (max-width: 1024px) {
	gap: 80px;
}
`
const TextBlock = styled.div`
display: flex;
flex-direction: column;
gap: 32px;`

const H1 = styled.h1`
@media (max-width: 1024px) {
	font-size: 24px;
}
`

const Caption = styled.p`
font-size: 24px;

@media (max-width: 1024px) {
	font-size: 20px;
}
`


