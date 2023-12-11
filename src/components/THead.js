import React from "react";
import styled from "styled-components";

export default function THead(){
    return(
        <Container>
            <Date>Date</Date>
            <EventName>Event name</EventName>
            <Location>Location</Location>
        </Container>
    )
}

const Container = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 1fr;
background-color: white;
border-radius: 8px;
width: 100%;
max-width: 1200px;
`

const Date = styled.div`
font-weight: 600;
font-size: 24px;
color: #282c34;
padding: 16px;
text-align: center;
`

const EventName = styled.div`
font-weight: 600;
font-size: 24px;
color: #282c34;
padding: 16px;
`

const Location = styled.div`
font-weight: 600;
font-size: 24px;
color: #282c34;
padding: 16px;
`