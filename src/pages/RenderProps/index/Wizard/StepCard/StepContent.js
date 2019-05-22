import React from 'react';

class StepContent extends React.Component {

  render() {
    const {step, steps} = this.props;

    return (
      <div style={{flexGrow: 1}}>
        {step < steps.length+1 ? "Какой-то текст": "Конец"}
      </div>
    )
  }
}

export default StepContent
