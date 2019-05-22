import React from 'react';


class Stepper extends React.Component {

  render() {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Stepper
