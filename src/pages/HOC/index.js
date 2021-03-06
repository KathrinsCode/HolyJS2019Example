import React from 'react';
import Wizard from "./index/Wizard";
import Stepper from "./index/Wizard/Stepper";
import StepCard from "./index/Wizard/StepCard";
import Step from "./index/Wizard/Stepper/Step";
import StepContent from "./index/Wizard/StepCard/StepContent";
import Nav from "./index/Wizard/StepCard/Nav";
import Next from "./index/Wizard/StepCard/Nav/Next";


class App extends React.Component {

  steps = [1,2,3];

  render() {

    return (
      <div>
        <Wizard steps={this.steps}>
          <Stepper>
            {this.steps.map(step => <Step key={step} value={step}/>)}
          </Stepper>
          <StepCard>
            <StepContent/>
            <Nav>
              <Next/>
            </Nav>
          </StepCard>
        </Wizard>
      </div>
    )
  }
}

export default App
