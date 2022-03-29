import list from 'reducers/clients/clientsListReducers';
import form from 'reducers/clients/clientsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
