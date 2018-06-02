import { connect } from 'react-redux';
import TestComponent from './../components/TestComponent';
import { getTestAction } from '../modules/test/selectors';
import { testAction } from '../modules/test/actions';

const mapStateToProps = state => {
  return {
    testData: getTestAction(state)
  };
};

const mapDispatchToProps = {
  testAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
