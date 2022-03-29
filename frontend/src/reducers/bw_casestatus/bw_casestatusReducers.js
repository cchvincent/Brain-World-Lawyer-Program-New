import list from 'reducers/bw_casestatus/bw_casestatusListReducers';
import form from 'reducers/bw_casestatus/bw_casestatusFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
