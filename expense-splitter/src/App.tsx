import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import styled from 'styled-components';
import FormProvider from './context/FormProvider';


function App() {

  



  const Container = styled.div`
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `

  
  return (
    <FormProvider>
      <Container>
      <Form/>

    </Container>
    </FormProvider>
    
  )
}

export default App;
