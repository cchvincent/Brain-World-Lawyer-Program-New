import list from 'reducers/files/filesListReducers';
import form from 'reducers/files/filesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
