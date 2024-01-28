import React from 'react'
import styled from 'styled-components'

function Form() {
  const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
  `;
  const LabelWrapper = styled.div`
    border: solid 1px black;
    border-radius:10px 0 0 10px;
  `
  const Label = styled.label`

  `;
  const Input = styled.input`
    width:30rem;
    border: solid 1px black;
    border-radius: 0 10px 10px 0;
  `;

  interface GroupedInputProps {
    name: string;
    placeholder: string;
  }

  const GroupedInput:React.FC<GroupedInputProps> = ({name,placeholder}) => {
    return (
      <InputContainer>
        <LabelWrapper>
          <Label>{name}</Label>
        </LabelWrapper>

        <Input placeholder={placeholder}></Input>
      </InputContainer>
    );
  };

  return (
    <form style={{marginBottom:"20vh"}} action="process_payment.php" method="post">
      <GroupedInput name={"NAME"} placeholder={"Your Name"}/>
      <GroupedInput name={"Payment"} placeholder={"Payment in advance"}/>
      <GroupedInput name={"NAME"} placeholder={"Your Name"}/>
      <GroupedInput name={"Payment"} placeholder={"Payment in advance"}/>
      <GroupedInput name={"NAME"} placeholder={"Your Name"}/>
      <GroupedInput name={"Payment"} placeholder={"Payment in advance"}/>
      <GroupedInput name={"NAME"} placeholder={"Your Name"}/>
      <GroupedInput name={"Payment"} placeholder={"Payment in advance"}/>
      <GroupedInput name={"NAME"} placeholder={"Your Name"}/>
      <GroupedInput name={"Payment"} placeholder={"Payment in advance"}/>
      
      
    </form>
  );
}

export default Form