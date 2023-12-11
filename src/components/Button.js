import React from "react";
import styled from "styled-components";

export default function Button({children, ...props}){
    return (
    <Container {...props}>
        <ButtonText>{children}</ButtonText>
    </Container>
    )
}

const Container = styled.button`
position: relative;
height: 56px;
border-radius: 16px;
cursor: pointer;
padding: 16px 16px;
border: 2px solid #282c34;
min-width: 220px;

&:hover {
    border: 2px solid #9D8EF7;
}

&:focus {
    outline: none;
    border: 2px solid #7B68EE;
}
`

const ButtonText = styled.div`
font-size: 20px;
font-weight: 700;
color: #282c34;
`