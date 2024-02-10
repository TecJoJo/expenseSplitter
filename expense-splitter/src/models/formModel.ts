export interface IFormStates {
    personAmount?: number;
    participantInputs:IParticipantInput[]
  }






export interface IParticipantInput{
    name:string,
    payment:string
}




export interface IAction<T> {
    type:string,
    payload:T|null
}



export interface  IFormContextValue{
    formStates:IFormStates,
    formDispatch:React.Dispatch<any>
} 