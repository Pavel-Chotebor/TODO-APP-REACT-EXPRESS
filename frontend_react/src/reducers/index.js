import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer'
import { hideComponentReducer } from './hideComponentReducer'
import { popUpMessageReducer } from './popUpMessageReducer'
import { userReducer } from './userReducer'
import { todoFormReducer } from './todoFormReducer'

const allReducers = combineReducers({
  todos: todoReducer,
  visibility: hideComponentReducer,
  message: popUpMessageReducer,
  userValues: userReducer,
  todoValues: todoFormReducer
});

export default allReducers