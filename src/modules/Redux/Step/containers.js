import {connect} from 'react-redux'
import actions from "../actions";
import Step from "../../../pages/Redux/index/Wizard/Stepper/Step";

function mapStateToProps(state) {
  return {
    step: state.step,
    maxStep: state.steps.length,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeStep: (step) => dispatch(actions.changeStep(step)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step)


