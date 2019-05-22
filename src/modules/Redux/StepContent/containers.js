import {connect} from 'react-redux'
import StepContent from "../../../pages/Redux/index/Wizard/StepCard/StepContent";

function mapStateToProps(state) {
  return {
    step: state.step,
    maxStep: state.steps.length,
  }
}

function mapDispatchToProps() {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepContent)


