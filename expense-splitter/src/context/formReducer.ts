import {IFormStates,IAction} from "../models/formModel"
import { CHANGE_INPUT_VALUE } from "../models/actions"
import { IParticipantInput } from "../models/formModel"

function formReducer(states:IFormStates,action:IAction<any>){

    
    switch (action.type){
        case CHANGE_INPUT_VALUE:
            
            
                
                
          const statesCopy = {...states}
          const participantInput = statesCopy.participantInputs?.[action.payload.participantIndex]
          participantInput[action.payload.dataId as keyof Pick<IParticipantInput,"name"|"payment">] = action.payload.updatedValue
          participantInput.isFloating[action.payload.dataId as keyof Pick<IParticipantInput,"name"|"payment">] = action.payload.updatedValue?true:false

          
          
          console.log("statesCopy",statesCopy);
          return statesCopy
          
                
            
    }
    

    return states
}

export default formReducer