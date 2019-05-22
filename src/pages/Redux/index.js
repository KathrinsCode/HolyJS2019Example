import React from 'react';
import Wizard from "./index/Wizard";
import Stepper from "./index/Wizard/Stepper";
import StepCard from "./index/Wizard/StepCard";
import Step from "../../modules/Redux/Step/containers";
import StepContent from "../../modules/Redux/StepContent/containers";
import Next from "../../modules/Redux/Next/containers";
import Nav from "./index/Wizard/StepCard/Nav";



class App extends React.Component {

  render() {

    return (
      <div>
        <Wizard steps={this.steps}>
          <Stepper>
            {this.props.steps.map(step => <Step value={step}/>)}
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
