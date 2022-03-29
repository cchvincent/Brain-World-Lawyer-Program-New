import list from 'reducers/casestatus/casestatusListReducers';
import form from 'reducers/casestatus/casestatusFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
