import React, { ReactNode, useContext, useState } from "react";
import {
  ADD_USER_INPUTS,
  RESET_ALL_USERS,
  RESET_ALL_INPUT_VALUES,
} from "../models/actions"
import styled from "styled-components";
import { FormContext } from "../context/FormProvider";
import { IFormContextValue } from "../models/formModel";
import GroupedInput from "./GroupedInput"
import { MdDeleteForever } from "react-icons/md";
import { CiEraser } from "react-icons/ci";
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
        <div className="border-bottom  border-primary-subtle">

        <GroupedInput dataId="name" name={"NAME"} placeholder={"Your Name"}  participantIndex={participantIndex}/>
        <GroupedInput dataId="payment" name={"Payment"} placeholder={"Payment in advance"}  participantIndex={participantIndex}/>
        <div className=" d-flex justify-content-end ">

        <MdDeleteForever size="2rem"/>

        <CiEraser size="2rem" />
        </div>
        </div>
      </>
    );
  };

  function Form() {
    const {formStates,formDispatch} = useContext(FormContext)
    
    const addPerson:React.MouseEventHandler<HTMLButtonElement> = ()=>{
      
      formDispatch({type:ADD_USER_INPUTS})
  
    }
    const resetAllUsers:React.MouseEventHandler<HTMLButtonElement> = ()=>{
      
      formDispatch({type:RESET_ALL_USERS})
  
    }
    const resetAllInputValues:React.MouseEventHandler<HTMLButtonElement> = ()=>{
      
      formDispatch({type:RESET_ALL_INPUT_VALUES})
  
    }
  




  
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

      <button type="button" onClick={addPerson} className=" btn btn-primary me-5 ">
        Add User 
      </button>
      <button type="button" onClick={resetAllUsers} className="btn btn-danger m-1  ">
        Reset All Users
      </button>
      <button type="button" onClick={resetAllInputValues} className="btn btn-danger m-1 ">
        Reset All Input Values
      </button>
      </BtnContainer>
      
    </FormContainer>
  );
}

export default Form;
