export interface IFormStates {
    
    participantInputs:IParticipantInput[];
    
  }






export interface IParticipantInput{
    name:string,
    payment:string
    isFloating:{name:boolean,payment:boolean}
}




export interface IAction<T> {
    type:string,
    payload:T|null
}



export interface  IFormContextValue{
    formStates:IFormStates,
    formDispatch:React.Dispatch<any>
} 