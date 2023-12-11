import React from "react";
import styled from "styled-components";

export default function Card({day, year, eventName, location, ...props}){
    return(
        <ContainerCard {...props}>
            <Day>{day}</Day>
            <Year>{year}</Year>
            <EventName>{eventName}</EventName>
            <Location>{location}</Location>
        </ContainerCard>
    )
}


const ContainerCard = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 2fr 1fr;
background-color: white;
border-radius: 8px;
width: 100%;
padding: 8px;
max-width: 1200px;
align-items: center;
cursor: pointer;
`
const Day = styled.div`
font-weight: 400;
font-size: 20px;
color: #282c34;
padding: 16px;
`
const Year = styled(Day)`
`

const EventName = styled.div`
font-weight: 400;
font-size: 20px;
color: #282c34;
padding: 16px;
`

const Location = styled.div`
font-weight: 400;
font-size: 20px;
color: #282c34;
padding: 16px;
`

