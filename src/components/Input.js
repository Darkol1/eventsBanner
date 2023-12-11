import React from "react";
import styled from "styled-components";

export default function Input({...props}){
    return <Container {...props}/>;

}

const Container = styled.input`
width: 100%;
height: 48px;
padding: 16px;
border-radius: 16px;
border: 2px solid #dcdedf;

	&:hover {
		border: 2px solid #9D8EF7;
	}

	&:focus {
		outline: none;
		border: 2px solid #7B68EE;
	}
`
