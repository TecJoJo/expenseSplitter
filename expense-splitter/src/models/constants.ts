import { IFormStates,IFormContextValue } from "./formModel";


export const defaultFormStates:IFormStates = {
    personAmount:1,
    participantInputs:[{name:"",payment:""},{name:"",payment:""},{name:"",payment:""}]

}

export const defaultFormContextValue:IFormContextValue = {
    formStates:{
        personAmount:1,
        participantInputs:[]
    },
    formDispatch:()=>{}
}