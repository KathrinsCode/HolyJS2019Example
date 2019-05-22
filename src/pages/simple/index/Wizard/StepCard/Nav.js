import React from 'react';
import Next from "./Nav/Next";


class Nav extends React.Component {

  render() {
    const {changeStep, step, maxStep} = this.props;

    return (
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Next changeStep={() => changeStep(step+1)} step={step} maxStep={maxStep}/>
      </div>
    )
  }
}

export default Nav
