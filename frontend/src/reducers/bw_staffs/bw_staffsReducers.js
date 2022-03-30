import list from 'reducers/bw_staffs/bw_staffsListReducers';
import form from 'reducers/bw_staffs/bw_staffsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
