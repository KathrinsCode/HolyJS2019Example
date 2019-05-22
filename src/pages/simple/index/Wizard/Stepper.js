import React from 'react';
import Step from "./Stepper/Step";


class Stepper extends React.Component {

  render() {
    const {steps, changeStep} = this.props;

    return (
      <div>
        {steps.map(step => <Step current={this.props.step === step} value={step} key={step} changeStep={changeStep}/>)}
      </div>
    )
  }
}

export default Stepper
