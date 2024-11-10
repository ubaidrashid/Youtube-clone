import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import { darkTheme, lightTheme } from './Components/Utils/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Pages/Video';
import LoginPage from './Components/LoginPage';

const Container = styled.div`
display:flex;
`
const Main = styled.div`
flex:6;
background-color:${({ theme }) => theme.bg};`

const Wrapper = styled.div``
const App = () => {
    const [darkMode, setDarkMode] = useState(true)

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <BrowserRouter>
                    <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
                    <Main>
                        <Navbar />
                        <Wrapper>
                            <Routes>
                                <Route path='/'>
                                    <Route index element={<Home />} />
                                    <Route path='video/:id' element={<Video />} /> 
                                    <Route path='signin' element={<LoginPage />} />
                                </Route>
                            </Routes>
                        </Wrapper>
                    </Main>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
    );
};

export default App;
