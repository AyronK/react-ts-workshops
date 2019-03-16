// src/reducers/index.ts
import { combineReducers } from 'redux';
import roomReducer from './roomReducer';

const testReducer = (state = 'test', action: any) => {
  return state;
};

export default combineReducers({
  testReducer,
  roomReducer,
});
