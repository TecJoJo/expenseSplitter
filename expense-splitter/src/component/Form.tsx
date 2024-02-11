import React, { ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormProvider";
import { IFormContextValue } from "../models/formModel";
import GroupedInput from "./GroupedInput"
  const FormContainer = styled.form`
    max-height: 80vh;
    overflow: scroll;
    
  `

  
  

  const BtnContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `
  


  interface IParticipantFormProps{
    
    participantIndex:number
  }

  const ParticipantForm: React.FC<IParticipantFormProps> = ({participantIndex}) => {
    
    return (
      <>
        <GroupedInput dataId="name" name={"NAME"} placeholder={"Your Name"}  participantIndex={participantIndex}/>
        <GroupedInput dataId="payment" name={"Payment"} placeholder={"Payment in advance"}  participantIndex={participantIndex}/>
      </>
    );
  };

  const addPerson:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.preventDefault()
    

  }
function Form() {
  const {formStates,formDispatch} = useContext(FormContext)

  



  
  // let persons:JSX.Element[] = []
  // for(let i = 0;i<personAmount;i++){
  //   persons.push(<ParticipantForm/>)
  // }

      
    
  




  return (
    <FormContainer >{/*onSubmit={handleSUbmit} without action  --> button type="submit"*/ }
      <div>

      {Array.from(formStates.participantInputs).map((participantInput,index)=><ParticipantForm key={index}  participantIndex={index}/>)}
      </div>
      
      <BtnContainer>

      <button onClick={addPerson} className=" btn btn-primary me-5 ">
        add person
      </button>
      <button className="btn btn-danger m-1  ">
        Reset persons
      </button>
      <button className="btn btn-danger m-1 ">
        Reset Values
      </button>
      </BtnContainer>
      
    </FormContainer>
  );
}

export default Form;
