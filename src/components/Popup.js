import React from 'react';
import styled from 'styled-components';
import icon from '../assets/meeting_icon.svg';


export default function Popup(props) {
    const {active, setActive, item} = props;
	return (
		<Container
            active={active}
            item={item}
            onClick={()=> setActive(false)}
        >
			<TextContainer active={active} onClick={e=> e.stopPropagation()}>
                <Title>{item.title}</Title>
                <Location>{item.location}</Location>
                <Description>{item.description}</Description>
                <Price>Ticket price: {item.ticket_price? item.ticket_price : 'none'}</Price>
                <Link><Url href={item.url} target="_blank" rel="noreferrer">Go to website</Url></Link>
                <ImgWrapper>
                    <img src={icon} alt="meeting"/>
                </ImgWrapper>
			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	position: fixed;
    background-color: rgba(0, 0, 0, .3);
    top: 0;
    left: 0;
	width: 100vw;
	height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ active }) => (active ? '1' : '0')};
    pointer-events: ${({ active }) => (active ? 'all' : 'none')};
    transition: 0.5s;

`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 40px;
    border-radius: 16px;
    background-color: white;
    width: 50vw;
    transform: scale(${({ active }) => (active ? '1' : '0.5')});
    transition: 0.5s all;
`;

const Description = styled.div`
color: black;
font-size: 18px;
`

const Title = styled.div`
color: black;
font-size: 24px;
`

const Link = styled.div`
`
const Price = styled.div`
color: black;
`
const Url = styled.a`
color: #7B68EE;
text-decoration: none;
`

const ImgWrapper = styled.div`
position: relative;
align-self: center;
width: 200px;
height: 200px;`

const Location = styled.div`
font-size: 12px;
color: #a9a9a9;
`