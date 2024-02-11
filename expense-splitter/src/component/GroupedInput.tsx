import React, { ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormProvider";
import { IFormContextValue,IParticipantInput } from "../models/formModel";
import { CHANGE_INPUT_VALUE } from "../models/actions";



interface IGroupInputProps{
    name:string,
    placeholder:string,
    
    participantIndex:number,
    dataId:keyof Pick<IParticipantInput,"name"|"payment">,// determine which input it is about, "name" or "payment"
  }

const GroupedInput:React.FC<IGroupInputProps> = ({name,placeholder,participantIndex,dataId}) => {
    const {formStates,formDispatch} = useContext(FormContext)


    const FloatingLabel = styled.label<{$isFloating:boolean;}>`
    transform: ${props =>props.$isFloating&& "translateY(-1rem);"};
    transition: transform 0.2s ease-in-out;
    font-size: 0.8rem;
    color: #515151;
  `
    
    
    const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const updatedValue = e.target.value
        console.log("payload",{participantIndex,dataId,updatedValue});
        
        formDispatch({type:CHANGE_INPUT_VALUE,payload:{participantIndex,dataId,updatedValue}})
    }
    return(
    <>
      <div className="form-floating mb-3">

      {/* let's set this floating attribute temporarily to true, TODO: 
      When state arrangement frame is ready we will dynamically change the isFloating value based
      on the input is empty or not.
      */}
      <FloatingLabel htmlFor="floatingInput" $isFloating={formStates.participantInputs?.[participantIndex]?.isFloating[dataId]}>{name}</FloatingLabel>
      <input onChange={handleInputChange} value={formStates.participantInputs?.[participantIndex]?.[dataId]} type="text" className="form-control" id="floatingInput" placeholder={placeholder}/>
      </div>
    </>
  )

}

export default GroupedInput

