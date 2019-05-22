import React from "react";

export function withInfo(WrappedComponent){
  return class extends React.Component {

    render(){
      const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
        step: this.props.step,
        steps: this.props.steps,
        changeStep: this.props.changeStep,
      }));

      return <WrappedComponent {...this.props} children={children}/>
    }
  }
}
