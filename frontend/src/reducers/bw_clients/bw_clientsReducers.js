import list from 'reducers/bw_clients/bw_clientsListReducers';
import form from 'reducers/bw_clients/bw_clientsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
