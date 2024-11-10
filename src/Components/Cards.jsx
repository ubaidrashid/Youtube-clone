import React from 'react'
import styled from 'styled-components'
import pic from '../Components/images/Screenshot 2024-10-31 123729.png'
import logo from '../Components/images/logo.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
width:360px;
gap: 10px;
margin-bottom: ${(props)=> props.type === 'sm' ? '10px' : '45px'};
display: ${(props)=> props.type === 'sm' && 'flex'};
`
const Image = styled.img`
width: ${(props)=> props.type === 'sm' ? '180px' : '100%'};
height: ${(props)=> props.type === 'sm' ? '110px' : '202px'};
border-radius:10px;
background-color:red;
`
const Details = styled.div`
margin-top: ${(props)=> props.type !== 'sm' && '16px'};
display:flex;
gap:12px;
`

const ChannelImg = styled.img`
height:36px;
display:  ${(props)=> props.type === 'sm' && 'none'};
width:36px;
border-radius:50%;
background-color:black;`

const Text = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:7px;
color:${({ theme }) => theme.text} ;

`
const Title = styled.h1`
font-size:  ${(props)=> props.type === 'sm' ? '16px' : '18px'};
font-weight: 500;
    text-transform: capitalize;

`
const ChannelName = styled.h2`
font-size: 14px;
font-weight:400;
color: ${({ theme }) => theme.textSoft};
    
`
const Info = styled.div`
font-size: 14px;
font-weight:400;
color: ${({ theme }) => theme.textSoft};
`

function Cards({type}) {
    const fixedVideoId = 'abc123';  // Hardcoded ID
    return (
        <Link to={`/video/${fixedVideoId}`} style={{textDecoration:'none'}}>
        <Container type={type}>
            <Image type={type} src={pic} />
            <Details type={type}>
                <ChannelImg type={type} src={logo} />
                <Text>
                    <Title type={type}>WEB development full course</Title>
                    <ChannelName>Oss coding</ChannelName>
                    <Info>1000.03002k views . 1day ago</Info>
                </Text>
            </Details>
        </Container>
        </Link>

    )
}

export default Cards
