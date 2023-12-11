import React from "react";
import styled from "styled-components";

export default function Select({arrEvents, ...props}){
    return(
    <Container {...props}>
        <Option defaultValue value={''}>All</Option>
        {
            arrEvents &&
            arrEvents.map(item => {
                return(
                    <Option key={item.title} value={item.location}>{item.location}</Option>
                )
            })
        }

    </Container>
    )
}

const Container = styled.select`
height: 48px;
border-radius: 16px;
outline: none;
padding: 16px;
`

const Option = styled.option`
font-size: 16px;
`
