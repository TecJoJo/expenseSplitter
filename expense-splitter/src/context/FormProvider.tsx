import React, { createContext, useReducer } from "react";
import {defaultFormStates,defaultFormContextValue} from "../models/constants"
import formReducer from "./formReducer";
import { IFormContextValue } from "../models/formModel";

// Create the context
export const FormContext = createContext(defaultFormContextValue);

function FormProvider({ children }: { children: React.ReactNode }) {
  const [formStates,formDispatch] = useReducer(formReducer,defaultFormStates)
  const contextValue:IFormContextValue = {formStates,formDispatch}

  return (
    // value attribute should be eventually substitute with the reducer 
    //default state
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
