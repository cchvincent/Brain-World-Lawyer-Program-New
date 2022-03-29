import list from 'reducers/filedocs/filedocsListReducers';
import form from 'reducers/filedocs/filedocsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
