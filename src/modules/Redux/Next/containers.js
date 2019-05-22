import {connect} from 'react-redux'
import actions from "../actions";
import Next from "../../../pages/Redux/index/Wizard/StepCard/Nav/Next";

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

export default connect(mapStateToProps, mapDispatchToProps)(Next)


