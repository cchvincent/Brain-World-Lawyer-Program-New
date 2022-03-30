import list from 'reducers/supervisors/supervisorsListReducers';
import form from 'reducers/supervisors/supervisorsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
