import list from 'reducers/bw_filedocs/bw_filedocsListReducers';
import form from 'reducers/bw_filedocs/bw_filedocsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
