import React from "react";
import styled from "styled-components";

const links = [
	{
		text: 'Partners',
	},
	{
		text: 'Integration',
	},
	{
		text: 'Company',
	},
	{
		text: 'Support',
	},
];


export default function Layout({ children }) {
    return(
        <Container>
            <Logo>
                Vortex
            </Logo>
            {links.map((link, index) => (
							<Nav key={index}>
                                {link.text}
							</Nav>
			))}

        </Container>
    )
}

const Container = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: end;
gap: 16px;
`

const Logo = styled.div`
font-family: 'Minecraft';
font-size: 72px;
color: #7B68EE;

@media (max-width: 1024px) {
	font-size: 48px;
}
`

const Nav = styled.div`
font-size: 28px;
text-align: center;
cursor: pointer;

&:hover {
    color: #7B68EE;
  }

@media (max-width: 1024px) {
	font-size: 18px;
}
`