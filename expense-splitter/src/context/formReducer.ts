import {IFormStates,IAction} from "../models/formModel"
import { CHANGE_INPUT_VALUE,SET_IS_FLOATING,SET_IS_NOT_FLOATING } from "../models/actions"
import { IParticipantInput } from "../models/formModel"

function formReducer(states:IFormStates,action:IAction<any>){

    let statesCopy
    let participantInput
    
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
            
    }
    

    return states
}

export default formReducer