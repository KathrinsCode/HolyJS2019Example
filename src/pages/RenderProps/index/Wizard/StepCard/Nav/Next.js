import React from 'react';

const styles = {
  button: {
    border: 'none',
    backgroundColor: '#006efe',
    color: '#fff',
    borderRadius: '4px',
    padding: '4px 14px',
    cursor: 'pointer',
  },
  disabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    color: 'rgba(0, 0, 0, 0.26)',
  },
};


class Next extends React.Component {

  render() {
    const {changeStep, step, steps} = this.props;
    const disabled = step >=steps.length+1;
    const disabledStyle = disabled ? styles.disabled : {};

    return (
      <button type={"button"}
              style={{...styles.button, ...disabledStyle}}
              disabled={disabled}
              onClick={() => changeStep(step + 1)}>
        Продолжить
      </button>
    )
  }
}

export default Next
