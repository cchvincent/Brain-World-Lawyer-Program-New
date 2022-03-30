import list from 'reducers/bw_introducers/bw_introducersListReducers';
import form from 'reducers/bw_introducers/bw_introducersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
