import list from 'reducers/progress/progressListReducers';
import form from 'reducers/progress/progressFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
