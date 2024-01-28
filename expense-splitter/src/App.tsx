import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import styled from 'styled-components';

function App() {
  const Container = styled.div`
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  
  return (
    <Container>
      <Form/>

    </Container>
  )
}

export default App;
