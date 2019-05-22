import React from 'react';

export const WizardContext = React.createContext();

class Wizard extends React.Component {

  state = {
    step: 1,
  };

  changeStep = (step) => this.setState({step});

  render() {
    const {step} = this.state;

    return (
      <div style={{display: 'flex', padding: '20px'}}>
        <WizardContext.Provider value={{
            step,
            steps: this.props.steps,
            changeStep: this.changeStep,
        }}>
          {this.props.children}
        </WizardContext.Provider>
      </div>
    )
  }
}

export default Wizard
