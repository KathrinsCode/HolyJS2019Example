import React from 'react';
import {withInfo} from "../withInfo";

const styles = {
  card: {
    border: '2px solid #cecece',
    borderRadius: '10px',
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    padding: '24px',
    margin: '0 24px'
  },
};

class StepCard extends React.Component {

  render() {

    return (
      <div style={styles.card}>
        {this.props.children}
      </div>
    )
  }
}

export default withInfo(StepCard)
