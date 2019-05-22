import types from './types';

const changeStep = (step) => ({
  type: types.STEP_CHANGED,
  step,
});


export default {
  changeStep,
};

