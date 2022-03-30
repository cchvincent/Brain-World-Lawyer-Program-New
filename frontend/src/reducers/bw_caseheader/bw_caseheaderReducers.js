import list from 'reducers/bw_caseheader/bw_caseheaderListReducers';
import form from 'reducers/bw_caseheader/bw_caseheaderFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
