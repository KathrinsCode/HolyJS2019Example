import React from 'react';
import {withInfo} from "../../withInfo";


class Nav extends React.Component {

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        {this.props.children}
      </div>
    )
  }
}

export default withInfo(Nav)
