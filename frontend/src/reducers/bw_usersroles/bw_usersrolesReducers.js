import list from 'reducers/bw_usersroles/bw_usersrolesListReducers';
import form from 'reducers/bw_usersroles/bw_usersrolesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
