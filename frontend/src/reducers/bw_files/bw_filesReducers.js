import list from 'reducers/bw_files/bw_filesListReducers';
import form from 'reducers/bw_files/bw_filesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
