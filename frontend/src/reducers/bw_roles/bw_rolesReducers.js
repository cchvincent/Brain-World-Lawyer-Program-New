import list from 'reducers/bw_roles/bw_rolesListReducers';
import form from 'reducers/bw_roles/bw_rolesFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
