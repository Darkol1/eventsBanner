import React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
    return (
        <Container>
            <Wrapper>{children}</Wrapper>
        </Container>
    )
}

const Container = styled.div`
    overflow-y: auto;
	overflow-x: hidden;
	min-height: 100vh;
	height: 100%;
	background-color: #282c34;
`
const Wrapper = styled.div`
    width: 100%;
	min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 40px 80px;
    align-items: center;

    @media (max-width: 1024px) {
        padding: 20px 40px;
    }
`