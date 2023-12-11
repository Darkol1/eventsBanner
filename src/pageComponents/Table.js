import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "../components/Button";
import { eventsCurrentFilter } from "../functions/eventsCurrentFilter";
import Card from "../components/Card";
import Input from "../components/Input";
import THead from '../components/THead';
import Popup from "../components/Popup";
import Select from "../components/Select";


export default function Table(){
    const [events, setEvents] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [changeSelect, setChangeSelect] = useState('');
    const [itemForPopup, setItemForPopup] = useState(null);

    const getEvents = () => {
        axios.get('https://events.vortex.foundation/events')
        .then(data => {
            setEvents(data.data.data);
        })

    };

    useEffect( () => {
        getEvents()
    }, []);

    const eventsArray = eventsCurrentFilter(events, isClicked);

    const myFilteredEvents = eventsArray.filter(event => {
        return (event.title.toLowerCase().includes(inputValue.toLowerCase()) &&
                event.location.includes(changeSelect)
    )});

    return(
        <Container>
            <HeadContainer>
                <Input type="text" placeholder="Search by name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <Select onChange={(e) => setChangeSelect(e.target.value)} arrEvents={events}/>
                <Button onClick={() => setIsClicked(!isClicked)}>{isClicked ? 'See coming events' : 'See past events'}</Button>     
            </HeadContainer>
            <THead/>
            <ContainerCard>
                {
                myFilteredEvents.map(event => {
                    return(
                        <Card onClick={() => setItemForPopup(event)}
                            key={event.title}
                            day={event.date_end ? (event.date_start.slice(0, 5) + '-' + event.date_end.slice(0, 5)) : event.date_start.slice(0, 5)}
                            year={event.date_end ? event.date_end.slice(6)  : event.date_start.slice(6)}
                            eventName={event.title}
                            location={event.location}
                        />
                    )
                    })  
                }
                {
                itemForPopup && 
                <Popup active={itemForPopup} setActive={setItemForPopup} item={itemForPopup} />
                }
            </ContainerCard> 
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 16px;
align-items: center;
min-height: 600px;
max-width: 1200px;
`

const HeadContainer = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr;
width: 100%;
gap: 32px;
justify-content: center;
align-items: center;
@media (max-width: 1024px) {
	display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    align-items: stretch;
}
`

const ContainerCard = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;
align-items: center;`