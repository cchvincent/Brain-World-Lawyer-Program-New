import list from 'reducers/introducers/introducersListReducers';
import form from 'reducers/introducers/introducersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
