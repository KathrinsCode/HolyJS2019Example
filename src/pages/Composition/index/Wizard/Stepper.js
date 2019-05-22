import React from 'react';


class Stepper extends React.Component {

  render() {
    const {steps, StepButton} = this.props;

    return (
      <div>
        {steps.map(step => <StepButton key={step} value={step}/>)}
      </div>
    )
  }
}

export default Stepper
