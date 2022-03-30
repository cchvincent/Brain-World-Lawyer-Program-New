import list from 'reducers/bw_casefiles/bw_casefilesListReducers';
import form from 'reducers/bw_casefiles/bw_casefilesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
