import list from 'reducers/bw_progress/bw_progressListReducers';
import form from 'reducers/bw_progress/bw_progressFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
