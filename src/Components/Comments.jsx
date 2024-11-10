import React from 'react'
import styled from 'styled-components'
import avatar from '../Components/images/logo.png'
import Comment from './Comment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

`
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 25px;
`
const Avatar = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
`

const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme})=> theme.soft};
outline: none;
padding: 5px;
background-color: transparent;
width: 100%;
`

function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src={avatar}/>
        <Input placeholder='Add a comment...'/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}

export default Comments
