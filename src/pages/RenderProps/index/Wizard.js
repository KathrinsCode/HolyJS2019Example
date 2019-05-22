import React from 'react';
import * as PropTypes from 'prop-types';

class Wizard extends React.Component {

  state = {
    step: 1,
  };

  changeStep = (step) => this.setState({step});

  render() {
    const {step} = this.state;
    const {steps} = this.props;
    const newProps = {
      step,
      steps,
      changeStep: this.changeStep,
    };

    return (
      <div style={{display: 'flex', padding: '20px'}}>
        {this.props.children(newProps)}
      </div>
    )
  }
}

Wizard.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Wizard
