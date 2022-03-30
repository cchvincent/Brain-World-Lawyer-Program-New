import list from 'reducers/handlers/handlersListReducers';
import form from 'reducers/handlers/handlersFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
