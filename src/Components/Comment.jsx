import React from 'react'
import styled from 'styled-components'
import logo from '../Components/images/logo.png'

const Container = styled.div`
display: flex;
/* align-items: center; */
gap: 25px;

` 
const Avatar = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
`
const Detail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color:${({theme})=> theme.text};
`
const Name = styled.span`
font-size: 13px;
font-weight: 500;

`
const Date = styled.span`
font-size: 12px;
color: ${({theme})=> theme.textSoft};
font-weight: 400;
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;
`

function Comment() {
  return (
<Container>
<Avatar src={logo}/>
<Detail>
  <Name>John Doe <Date>1 day ago</Date></Name>
  <Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa est omnis neque provident veritatis molestiae ducimus, sint placeat voluptatum molestias incidunt error, illo excepturi beatae et aliquid exercitationem eos nemo!
  </Text>
</Detail>
</Container>  
)
}

export default Comment
