import React from 'react';
import {WizardContext} from "../../Wizard";


const StepContent = () => (<WizardContext.Consumer>{value => {

    const {step, steps} = value;

    return (
      <div style={{flexGrow: 1}}>
        {step < steps.length+1 ? "Какой-то текст": "Конец"}
      </div>
    )
  }}
  </WizardContext.Consumer>
);

export default StepContent
