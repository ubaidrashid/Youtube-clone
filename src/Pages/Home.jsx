import React from 'react'
import Card from '../Components/Cards'
import styled from 'styled-components'

const Container = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(350px , 1fr));
padding:10px;
gap:10px;

`
function Home() {
  return (
    <Container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </Container>
  )
}

export default Home
