import React from 'react';
import {WizardContext} from "../../../Wizard";

const styles = {
  button: {
    border: 'none',
    backgroundColor: '#006efe',
    color: '#fff',
    borderRadius: '4px',
    padding: '4px 14px',
    cursor: 'pointer',
  },
  disabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    color: 'rgba(0, 0, 0, 0.26)',
  },
};

const Next = () => (<WizardContext.Consumer>{value => {

    const {step, changeStep, steps} = value;
    const disabled = step >= steps.length + 1;
    const disabledStyle = disabled ? styles.disabled : {};

    return (
      <button type={"button"}
              style={{...styles.button, ...disabledStyle}}
              disabled={disabled}
              onClick={() => changeStep(step + 1)}>
        Продолжить
      </button>
    )
  }}
  </WizardContext.Consumer>
);

export default Next


