import list from 'reducers/bw_caseheaderreferences/bw_caseheaderreferencesListReducers';
import form from 'reducers/bw_caseheaderreferences/bw_caseheaderreferencesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
