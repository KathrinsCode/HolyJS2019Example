import React from 'react';

class Wizard extends React.Component {

  state = {
    step: 1,
  };

  changeStep = (step) => this.setState({step});

  render() {
    const {step} = this.state;
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      step,
      steps: this.props.steps,
      changeStep: this.changeStep,
    }));

    return (
      <div style={{display: 'flex', padding: '20px'}}>
        {children}
      </div>
    )
  }
}

export default Wizard
