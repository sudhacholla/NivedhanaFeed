import {createStore} from 'redux';
import comReducer from './comReducer';

export default function configureStore(initialState) {
  return createStore(comReducer, initialState);
}

store.dispatch()
store.subscribe()
store.getState()
