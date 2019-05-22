import React from 'react';
import StepContent from "./StepCard/StepContent";
import Nav from "./StepCard/Nav";

const styles = {
  card: {
    border: '2px solid #cecece',
    borderRadius: '10px',
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    margin: '0 24px'
  },
};


class StepCard extends React.Component {

  render() {
    const {changeStep, step, maxStep} = this.props;

    return (
      <div style={styles.card}>
          <StepContent step={step} maxStep={maxStep}/>
          <Nav changeStep={changeStep} step={step} maxStep={maxStep}/>
      </div>
    )
  }
}

export default StepCard
