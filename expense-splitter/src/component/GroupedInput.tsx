import React, { ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import { FormContext } from "../context/FormProvider";
import { IFormContextValue,IParticipantInput } from "../models/formModel";
import { CHANGE_INPUT_VALUE,SET_IS_FLOATING,SET_IS_NOT_FLOATING } from "../models/actions";



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
    transition: transform 5s ease-in-out !important;
    font-size: 0.8rem;
    color: #515151;
  `
    
    
    const handleInputChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const updatedValue = e.target.value
        console.log("payload",{participantIndex,dataId,updatedValue});
        
        formDispatch({type:CHANGE_INPUT_VALUE,payload:{participantIndex,dataId,updatedValue}})
    }

    const handleFocus = ()=>{
      console.log("is focused, the floating state should be changed to true");
      formDispatch({type:SET_IS_FLOATING,payload:{participantIndex,dataId}})
    }
    const handleBlur = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const updatedValue = e.target.value
      console.log("is blur, the floating state should be changed to false");
      formDispatch({type:SET_IS_NOT_FLOATING,payload:{participantIndex,dataId,updatedValue}})
    }
    return(
    <>
      <div className="form-floating mb-3">

     
      <FloatingLabel htmlFor="floatingInput" $isFloating={formStates.participantInputs?.[participantIndex]?.isFloating[dataId]}>{name}</FloatingLabel>
      <input onBlur={handleBlur} onFocus={handleFocus} onChange={handleInputChange} value={formStates.participantInputs?.[participantIndex]?.[dataId]} type="text" className="form-control" id="floatingInput" placeholder={placeholder}/>
      </div>
    </>
  )

}

export default GroupedInput

