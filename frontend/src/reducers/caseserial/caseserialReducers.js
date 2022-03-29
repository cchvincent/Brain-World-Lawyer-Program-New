import list from 'reducers/caseserial/caseserialListReducers';
import form from 'reducers/caseserial/caseserialFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
