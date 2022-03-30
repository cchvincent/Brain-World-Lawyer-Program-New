import list from 'reducers/usersroles/usersrolesListReducers';
import form from 'reducers/usersroles/usersrolesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
