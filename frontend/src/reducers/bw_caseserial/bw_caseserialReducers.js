import list from 'reducers/bw_caseserial/bw_caseserialListReducers';
import form from 'reducers/bw_caseserial/bw_caseserialFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
