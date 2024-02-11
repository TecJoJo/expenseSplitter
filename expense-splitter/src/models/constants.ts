import { IFormStates,IFormContextValue } from "./formModel";


export const defaultFormStates:IFormStates = {
    
    participantInputs:[{name:"",payment:"",isFloating:{name:false,payment:false}}],
    

}

export const defaultFormContextValue:IFormContextValue = {
    formStates:{
        
        participantInputs:[],
        
    },
    formDispatch:()=>{}
}