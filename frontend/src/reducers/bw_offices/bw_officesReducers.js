import list from 'reducers/bw_offices/bw_officesListReducers';
import form from 'reducers/bw_offices/bw_officesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
