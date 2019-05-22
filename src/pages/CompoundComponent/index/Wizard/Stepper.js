import React from 'react';


class Stepper extends React.Component {

  render() {
    const {step, changeStep} = this.props;
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      key: child.props.value,
      current: child.props.value === step,
      changeStep,
    }));

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Stepper
