import { IFormStates, IAction } from "../models/formModel"
import {
    CHANGE_INPUT_VALUE, 
    SET_IS_FLOATING, 
    SET_IS_NOT_FLOATING, 
    ADD_USER_INPUTS,
    RESET_ALL_USERS,
    RESET_ALL_INPUT_VALUES,
} from "../models/actions"
import { IParticipantInput } from "../models/formModel"

function formReducer(states:IFormStates,action:IAction<any>){

    let statesCopy
    let participantInput
    let newStates
    
    switch (action.type){
        case CHANGE_INPUT_VALUE:
            
            
                
                
            statesCopy = {...states}
            participantInput = statesCopy.participantInputs?.[action.payload.participantIndex]
            participantInput[action.payload.dataId as keyof Pick<IParticipantInput,"name"|"payment">] = action.payload.updatedValue
            participantInput.isFloating[action.payload.dataId as keyof Pick<IParticipantInput,"name"|"payment">] = action.payload.updatedValue?true:false

            
            
            console.log("statesCopy",statesCopy);
            return statesCopy
        
        case SET_IS_FLOATING:
            statesCopy = {...states}
            participantInput = statesCopy.participantInputs?.[action.payload.participantIndex]               
            participantInput.isFloating[action.payload.dataId as keyof Pick<IParticipantInput,"name"|"payment">] = true
            
            console.log("statesCopy",statesCopy);
            return statesCopy     
        case SET_IS_NOT_FLOATING:
            statesCopy = {...states}
            participantInput = statesCopy.participantInputs?.[action.payload.participantIndex]               
            participantInput.isFloating[action.payload.dataId as keyof Pick<IParticipantInput,"name"|"payment">] = action.payload.updatedValue?true:false

            console.log("statesCopy",statesCopy);
            return statesCopy     
        case ADD_USER_INPUTS:
            
                newStates = {...states,participantInputs:[...states.participantInputs,{name:"",payment:"",isFloating:{name:false,payment:false}}]}
                console.log("newStates",newStates);
                
            return newStates
        case RESET_ALL_USERS:
            
                newStates = {...states,participantInputs:[{name:"",payment:"",isFloating:{name:false,payment:false}}]}
                console.log("newStates",newStates);
                
            return newStates
        case RESET_ALL_INPUT_VALUES:
            
                newStates = {...states,participantInputs:states.participantInputs.map((input)=>{
                    input.name = ""
                    input.payment=""
                    input.isFloating= {name:false,payment:false}
                    return input 
                })}
                console.log("newStates",newStates);
                
            return newStates
    }   
    

    return states
}

export default formReducer