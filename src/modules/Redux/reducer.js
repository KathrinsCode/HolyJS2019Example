import types from './types';

const initialState = {
  steps: [1, 2, 3],
  step: 1,
};

const PageReducer = (state = initialState, action) => {
  switch(action.type){
    case types.STEP_CHANGED: {
      return {
        ...state,
        step: action.step,
      }
    }
    default: return state
  }
};

export default PageReducer;
