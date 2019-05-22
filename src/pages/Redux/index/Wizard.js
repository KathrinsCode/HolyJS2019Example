import React from 'react';


class Wizard extends React.Component {

  render() {
    return (
      <div style={{display: 'flex', padding: '20px'}}>
        {this.props.children}
      </div>
    )
  }
}

export default Wizard
