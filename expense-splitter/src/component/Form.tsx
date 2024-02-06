import React, { ReactNode, useState } from "react";
import styled from "styled-components";

function Form() {
  const [personAmount,setPersonAmount] = useState(1)

  const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
  `;
  const LabelWrapper = styled.div`
    border-left: solid 1px black;
    border-top: solid 1px black;
    border-bottom: solid 1px black;

    border-radius: 10px 0 0 10px;
    min-width: 6rem;
  `;
  const Label = styled.label``;
  const Input = styled.input`
    width: 30rem;
    border: solid 1px black;
    border-radius: 0 10px 10px 0;
  `;

  const GroupedInput: React.FC<GroupedInputProps> = ({ name, placeholder }) => {
    return (
      <InputContainer>
        <LabelWrapper>
          <Label>{name}</Label>
        </LabelWrapper>

        <Input placeholder={placeholder}></Input>
      </InputContainer>
    );
  };

  interface GroupedInputProps {
    name: string;
    placeholder: string;
  }
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
    <form action="" method="">
      
      {Array.from({length:personAmount}).map((person,index)=><ParticipantForm key={index}/>)}
      
      <button onClick={addPerson} className=" btn btn-primary ">
        add person
      </button>
    </form>
  );
}

export default Form;
