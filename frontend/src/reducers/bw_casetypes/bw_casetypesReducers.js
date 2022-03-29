import list from 'reducers/bw_casetypes/bw_casetypesListReducers';
import form from 'reducers/bw_casetypes/bw_casetypesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
