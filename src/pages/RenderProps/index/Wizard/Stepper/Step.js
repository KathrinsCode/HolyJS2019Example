import React from 'react';

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

class Step extends React.Component {

  render() {

    const {step, changeStep, value} = this.props;
    const current = value === step;
    const currentStyle = current ? styles.active : styles.inactive;

    return (
      <div onClick={() => changeStep(value)}
           style={{
             ...styles.step,
             ...currentStyle,
           }}
      >
        {value}
      </div>
    )
  }
}

export default Step
