import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer'
import { hideComponentReducer } from './hideComponentReducer'
import { popUpMessageReducer } from './popUpMessageReducer'
import { editFormReducer } from './editFormReducer'
import { userReducer } from './userReducer'

const allReducers = combineReducers({
  todos: todoReducer,
  visibility: hideComponentReducer,
  message: popUpMessageReducer,
  editFormVisibility: editFormReducer,
  userValues: userReducer,
});

export default allReducers