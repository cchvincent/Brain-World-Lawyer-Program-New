import list from 'reducers/staffs/staffsListReducers';
import form from 'reducers/staffs/staffsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
