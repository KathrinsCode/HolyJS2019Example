import React from 'react';


class Nav extends React.Component {

  render() {
    const {changeStep, step, maxStep} = this.props;
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      changeStep, step, maxStep,
    }));

    return (
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        {children}
      </div>
    )
  }
}

export default Nav
