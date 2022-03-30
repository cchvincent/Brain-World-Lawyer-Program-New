import list from 'reducers/bw_supervisors/bw_supervisorsListReducers';
import form from 'reducers/bw_supervisors/bw_supervisorsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
