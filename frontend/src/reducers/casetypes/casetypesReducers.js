import list from 'reducers/casetypes/casetypesListReducers';
import form from 'reducers/casetypes/casetypesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
