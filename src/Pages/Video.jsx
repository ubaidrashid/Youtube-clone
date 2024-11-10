import React, { useState } from 'react'
import styled from 'styled-components'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import logo from '../Components/images/logo.png'
import Comments from '../Components/Comments';
import Cards from '../Components/Cards';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
const Container = styled.div`
  display: flex;
  padding: 20px;
  gap: 24px;

`
const Content = styled.div`
  flex:5;
`
const Recommendation = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const VideoWrapper = styled.div`
  
`
const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};;
`
const Detail = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Info = styled.span`
color: ${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
display: flex;
gap: 15px;
align-items: center;
`
const Button = styled.div`
display: flex;
align-items: center;
gap: 3px;
color: ${({ theme }) => theme.text};
cursor: pointer;
`
const Channel = styled.div`
  display: flex;
  justify-content:space-between ;
`
const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`
const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`

const Image = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
`

const ChannelDetails = styled.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
font-weight: 500;
`

const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color: ${({theme})=> theme.textSoft};
font-size: 12px;
`

const Description = styled.p`
font-size: 14px;
`

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
  height: max-content;
  padding: 10px 20px;
  border-radius: 3px;
`

function Video() {
  const [like,setLike] = useState(0)
  const [dislike,setDisLike] = useState(0)
  const [isdislike,setIsDisLike] = useState(false)
  const [islike,setIsLike] = useState(false)
  function likeHander(){
    if(!islike){
      setIsLike(true)
      setLike(like + 1)
      setIsDisLike(false)
    }
  }
  function disLikeHandler(){
if(like){
  setIsDisLike(true)
  setLike(0);
  setDisLike(dislike + 1)
  setIsLike(false)
}
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/yIaXoop8gl4?si=Pw8yXiBXZs2jGvJ1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </VideoWrapper>
        <Title>React Video Sharing App UI Design | Youtube UI Clone with React</Title>
        <Detail>
          <Info>1000.03002k views . 1day ago</Info>
          <Buttons>
            <Button>{islike ? <ThumbUpIcon/> : <ThumbUpOutlinedIcon onClick={()=> likeHander()}/>}{like}</Button>
            <Button>{isdislike ? <ThumbDownIcon/> : <ThumbDownOutlinedIcon onClick={()=> disLikeHandler()}/>}Dislike</Button>
            <Button><ReplyOutlinedIcon />Share</Button>
            <Button><ThumbUpOutlinedIcon />Save</Button>
          </Buttons>
        </Detail>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={logo} />
            <ChannelDetails>
              <ChannelName>Oss-Coding</ChannelName>
              <ChannelCounter>200k subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolore, quia expedita architecto at est voluptatibus perspiciatis inventore illo, velit sint molestiae vel nemo soluta aliquam quo autem, nulla vitae.</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
        <Cards type='sm'/>
      </Recommendation>
    </Container>
  )
}

export default Video
