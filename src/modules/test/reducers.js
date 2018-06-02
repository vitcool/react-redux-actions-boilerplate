import { handleActions } from 'redux-actions';
import { testAction } from './actions';

const defaultState = {
  test: false
};

export default handleActions(
  {
    [testAction]: (state, { payload }) => {
      return {
        ...state,
        testData: payload
      };
    }
  },
  defaultState
);
