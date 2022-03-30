import list from 'reducers/letterheading/letterheadingListReducers';
import form from 'reducers/letterheading/letterheadingFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
