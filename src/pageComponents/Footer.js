import React from "react";
import styled from "styled-components";

export default function Footer(){
    return(
        <Container>
            <Line/>
            <TextContainer>
                <P>Privacy Policy</P>
                <P>Terms</P>
                <P>Cookies</P>
            </TextContainer>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
width: 100%;

@media (max-width: 1024px) {
	gap: 16px;
}
`

const Line = styled.div`
height: 2px;
width: 100%;
background-color: #868D9A;
`

const TextContainer = styled.div`
display: flex;
align-items: end;
justify-content: center;
gap: 32px;
`

const P = styled.div`
font-size: 18px;
cursor: pointer;

&:hover {
    text-decoration: underline;
}

@media (max-width: 1024px) {
	font-size: 12px;
}
`