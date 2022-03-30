import list from 'reducers/offices/officesListReducers';
import form from 'reducers/offices/officesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
