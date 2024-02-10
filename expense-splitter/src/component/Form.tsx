import React, { ReactNode, useState } from "react";
import styled from "styled-components";

  const FormContainer = styled.form`
    max-height: 80vh;
    overflow: scroll;
    
  `

  const FloatingLabel = styled.label<{$isFloating?:boolean;}>`
    transform: ${props =>props.$isFloating&& "translateY(-1rem);"};
    transition: transform 0.2s ease-in-out;
    font-size: 0.8rem;
    color: #515151;
  `
  

  const BtnContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `
function Form() {
  const [personAmount,setPersonAmount] = useState(1)


  interface GroupInputProps{
    name:string,
    placeholder:string,
  }

  const GroupedInput:React.FC<GroupInputProps> = ({name,placeholder}) => {
    return(
      <>
        <div className="form-floating mb-3">

        {/* let's set this floating attribute temporarily to true, TODO: 
        When state arrangement frame is ready we will dynamically change the isFloating value based
        on the input is empty or not. 
        */}
        <FloatingLabel htmlFor="floatingInput" $isFloating={true}>{name}</FloatingLabel>
        <input type="text" className="form-control" id="floatingInput" placeholder={placeholder}/>
        </div>
      </>
    )
  
  };

 
  const ParticipantForm: React.FC = () => {
    return (
      <>
        <GroupedInput name={"NAME"} placeholder={"Your Name"} />
        <GroupedInput name={"Payment"} placeholder={"Payment in advance"} />
      </>
    );
  };

  
  // let persons:JSX.Element[] = []
  // for(let i = 0;i<personAmount;i++){
  //   persons.push(<ParticipantForm/>)
  // }

      
    
  

  const addPerson:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.preventDefault()
    setPersonAmount((number)=>number+=1)

  }



  return (
    <FormContainer >{/*onSubmit={handleSUbmit} without action  --> button type="submit"*/ }
      <div>

      {Array.from({length:personAmount}).map((person,index)=><ParticipantForm key={index}/>)}
      </div>
      
      <BtnContainer>

      <button onClick={addPerson} className=" btn btn-primary me-5 ">
        add person
      </button>
      <button className="btn btn-danger m-1  ">
        Reset persons
      </button>
      <button className="btn btn-danger m-1 ">
        Reset Values
      </button>
      </BtnContainer>
      
    </FormContainer>
  );
}

export default Form;
