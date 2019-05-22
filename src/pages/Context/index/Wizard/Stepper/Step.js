import React from 'react';
import {WizardContext} from "../../Wizard";

const styles = {
  step: {
    width: '48px',
    height: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    borderRadius: '50%',
    margin: '8px',
    border: '1px solid #006efe',
    cursor: 'pointer',
  },
  active: {
    backgroundColor: '#006efe',
    color: '#fff',
  },
  inactive: {
    backgroundColor: '#fff',
    color: '#006efe',
  },
};

const Step = ({val}) => (<WizardContext.Consumer>{value => {

    const {step, changeStep} = value;
    const current = val === step;
    const currentStyle = current ? styles.active : styles.inactive;

    return (
      <div onClick={() => changeStep(val)}
           style={{
             ...styles.step,
             ...currentStyle,
           }}
      >
        {val}
      </div>
    )
  }}
  </WizardContext.Consumer>
);

export default Step
