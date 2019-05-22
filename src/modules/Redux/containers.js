import {connect} from 'react-redux'
import App from "../../pages/Redux";

function mapStateToProps(state) {
  return {
    steps: state.steps,
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
