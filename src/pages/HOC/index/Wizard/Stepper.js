import React from 'react';
import {withInfo} from "../withInfo";


class Stepper extends React.Component {

  render() {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withInfo(Stepper)
