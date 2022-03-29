import list from 'reducers/caseheaderreferences/caseheaderreferencesListReducers';
import form from 'reducers/caseheaderreferences/caseheaderreferencesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
