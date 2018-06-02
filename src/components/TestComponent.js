import React, { Component } from 'react';
import PropTypes from'prop-types';

class TestComponent extends Component {
  onClick = () => {
    this.props.testAction(true);
  };
  render() {
    const { testData } = this.props;
    return (
      <div onClick={() => this.onClick()}>
        {testData ? <span>test data is true</span> : <div>test data is false</div>}Í
      </div>
    );
  }
}

TestComponent.propTypes = {
    testAction: PropTypes.func,
    testData:PropTypes.bool
}

export default TestComponent;
