import React from 'react'
import styled from 'styled-components'
import logo from './images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import HistoryIcon from '@mui/icons-material/History';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import SettingsIcon from '@mui/icons-material/Settings';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import  './css/menu.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex:1.2;
background-color:${({theme})=> theme.bgLighter};
height:100vh;
color:${({theme})=> theme.text};
font-size:14px;
overflow-y:auto;
position:sticky;
top:0px;

`
const Wrapper = styled.div`
padding:10px 20px;

`
const Logo = styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:25px;
`
const Img = styled.img`
height:25px
`
const Item = styled.div`
display:flex;
align-items:center;
gap:20px;
cursor:pointer;
padding: 7.5px 0px;

&:hover{
    background-color: ${({theme})=> theme.soft};
    color: ${({theme})=> theme.Text};
}
`
const Hr = styled.div`
margin :15px 0px;
border:0.5px solid ${({theme})=> theme.soft}`
;
const Login = styled.div`
line-height:1.5;
font-size:1rem;

`
const Button = styled.button`

`
const Title = styled.h2`
font-size:14px;
font-weight:500;
color:${({theme})=> theme.textSoft}`

function Menu({setDarkMode , darkMode}) {
    return (
        <Container className='container'>
            <Wrapper>
                <Link to='/' style={{textDecoration:'none',color:'inherit'}}> 
                <Logo className='logo'>
                    <Img src={logo} />
                    OssTube
                </Logo>
                </Link>
                <Link to='/' style={{textDecoration:'none',color:'inherit'}}> 
                <Item>

                    <HomeIcon />
                    Home
                </Item>
                </Link>

                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon/>
                    Subscription
                </Item>
                <Hr/>
                <Item>
                    <LibraryAddIcon/>
Library
                </Item>
                <Item>
                    <HistoryIcon/>
                    History
                </Item>
                <Hr/>
                <Login className='loginMenu'>
                    Sign in to like videos , comment ,and subscribe
                    <div>
                    <Link to='signin' style={{
                        textDecoration:'none',
                    }}>
                    <Button className='loginBtnMenu'><AccountCircleOutlinedIcon/> SIGN IN</Button>
                    </Link>
                    </div>
                </Login>
                <Hr/>
                <Title>
                    BEST OF OSSTUBE
                </Title>
                <Item>
                    <LibraryMusicIcon/>
                    Music
                </Item>
                <Item>
                    <SportsBaseballIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon/>
                    Gaming
                </Item>
                <Item>
                    <MovieCreationIcon />
                    Movies
                </Item>
                <Item>
                    <NewspaperIcon/>
                    News
                </Item>
                <Item>
                    <LiveTvIcon />
                    Live
                </Item>
                <Hr/>
                <Item>
                    <SettingsIcon/>
                    Settings
                </Item>
                <Item>
                    <OutlinedFlagIcon/>
                    Report
                </Item>
                <Item>
                    <HelpOutlineIcon/>
                    Help
                </Item>
                <Item onClick={()=>setDarkMode(!darkMode)}>
                    <SettingsBrightnessIcon/>
                    {
                        darkMode ? 'Light Mode':'Dark Mode'
                    }
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu
