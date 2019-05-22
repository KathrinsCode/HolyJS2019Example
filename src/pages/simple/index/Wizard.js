import React from 'react';
import Stepper from "./Wizard/Stepper";
import StepCard from "./Wizard/StepCard";

class Wizard extends React.Component {

  state = {
    step: 1,
  };

  steps = [1, 2, 3];

  changeStep = (step) => this.setState({step});

  render() {
    const {step} = this.state;

    return (
      <div style={{display: 'flex', padding: '20px'}}>
        <Stepper steps={this.steps} step={step} changeStep={this.changeStep}/>
        <StepCard maxStep={this.steps.length} step={step} changeStep={this.changeStep}/>
      </div>
    )
  }
}

export default Wizard
