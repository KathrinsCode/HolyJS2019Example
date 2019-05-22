import React from 'react';

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
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      step: this.props.step,
      maxStep: this.props.steps.length,
      changeStep: this.props.changeStep,
    }));

    return (
      <div style={styles.card}>
        {children}
      </div>
    )
  }
}

export default StepCard
