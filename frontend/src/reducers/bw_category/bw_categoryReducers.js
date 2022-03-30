import list from 'reducers/bw_category/bw_categoryListReducers';
import form from 'reducers/bw_category/bw_categoryFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
