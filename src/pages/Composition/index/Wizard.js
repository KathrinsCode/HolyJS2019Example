import React from 'react';
import Stepper from "./Wizard/Stepper";
import StepCard from "./Wizard/StepCard";

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


class Wizard extends React.Component {

  state = {
    step: 1,
  };

  steps = [1, 2, 3];

  changeStep = (step) => this.setState({step});

  render() {
    const {step} = this.state;

    const StepButton = ({value}) => {
      const current = value === step;
      const currentStyle = current ? styles.active : styles.inactive;
      return (
      <div onClick={() => this.changeStep(value)}
           style={{
             ...styles.step,
             ...currentStyle,
           }}
      >
        {value}
      </div>
    )};

    return (
      <div style={{display: 'flex', padding: '20px'}}>
        <Stepper steps={this.steps} StepButton={StepButton}/>
        <StepCard maxStep={this.steps.length} step={step} changeStep={this.changeStep}/>
      </div>
    )
  }
}

export default Wizard
