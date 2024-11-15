import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
color: ${({theme})=> theme.text};
align-items: center;
height: calc(100vh - 60px);
flex-direction: column;
gap: 20px;
`
const Wrapper = styled.div`
border-radius: 8px;
display: flex;
padding: 20px 50px;
flex-direction: column;
background-color:${({theme})=> theme.bgLighter} ;
border: 1px solid ${({theme})=> theme.soft};
justify-content: center;
align-items: center;
gap: 10px;
`
const Title = styled.h1`
font-size: 24px;

`

const SubTitle = styled.h1`
font-size: 20px;
font-weight: 300;
`

const Input = styled.input`
border:1px solid ${({theme})=> theme.soft};  
border-radius: 3px;
padding: 10px;
background-color: transparent;

`

const Button = styled.button`
border-radius: 3px;
border: none;
padding: 10px 20px;
cursor: pointer;
font-weight: 500;
background-color: ${({theme})=> theme.soft};
color: ${({theme})=> theme.textSoft};
`

const More = styled.div`
display: flex;
font-size: 10px;
color: ${({theme})=> theme.textSoft};

`

const Links = styled.div`
margin-left: 50px;
`
const Link = styled.span`
margin-left: 30px;
`



function LoginPage() {
  return (
    <Container>
      <Wrapper>
       <Title>Sign in</Title>
       <SubTitle>to continue to ossTube</SubTitle>
       <Input placeholder='username'/>
       <Input type='password' placeholder='password'/>
       <Button>Sign in</Button>
       <Title>or</Title>
       <Input placeholder='username'/>
       <Input placeholder='email'/>
       <Input type='password' placeholder='password'/>
       <Button>Sign up</Button>
      </Wrapper>
       <More>
        English (USA)
        <Links>
        <Link>Help</Link>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        </Links>
       </More>
    </Container>
  )
}

export default LoginPage
