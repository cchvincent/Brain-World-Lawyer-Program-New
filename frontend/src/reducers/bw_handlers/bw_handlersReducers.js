import list from 'reducers/bw_handlers/bw_handlersListReducers';
import form from 'reducers/bw_handlers/bw_handlersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
