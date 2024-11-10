import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import './css/navbar.css'
import './css/menu.css'
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import YoutubeSearchedForOutlinedIcon from '@mui/icons-material/YoutubeSearchedForOutlined';

const Container = styled.div`
position:sticky;
top:0px;
background-color:${({ theme }) => theme.bgLighter};
height: 60px;
`

const Wrapper = styled.div`
display:flex;
color:${({ theme }) => theme.text};
align-items:center;
height:100%;
display:flex;
justify-content:end;
position:relative;
padding-inline:30px;
`

const Search = styled.div`
display:flex;
overFlow:hidden;
align-items:center;
position:absolute;
left:0px;
right:0px;
margin:auto;
height:50px;
width:50%;
justify-content:space-between;
// padding:5px;
border:1px solid #ccc;
border-radius:25px
`
const Input = styled.input`background-color:transparent;
border:none;
// padding-block:10px;
width:90%;
color:${({theme})=> theme.text};
padding-left:20px;
`

const Button = styled.button`
   background-color: transparent;
    padding: 8px 10px;
    color: #3ea6ff;
    display: flex;
    gap: 5px;
    align-items: center;
    border-color: #3ea6ff;
    box-shadow:0px 0px 5px #3ea6ff ;
    border-radius: 3px;
    /* width: 50%; */
    border: 1px solid;
`
const SearchIconWrapper = styled.div`
background-color: ${({ theme }) => theme.navBarSearchBg};
            height: 100%;
            width: 10%;
            display:flex;
            justify-content:center;
            align-items:center;
            cursor:pointer;
`
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input className='navInput' placeholder='Search' />
          <SearchIconWrapper>
            <YoutubeSearchedForOutlinedIcon style={{
            }} />
          </SearchIconWrapper>

        </Search>
        <Link to='signin' style={{textDecoration:'none',}}>
        <Button className='loginBtnMenu'><AccountCircleOutlinedIcon /> SIGN IN</Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar

