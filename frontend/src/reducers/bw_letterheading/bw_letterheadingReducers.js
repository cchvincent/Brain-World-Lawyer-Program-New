import list from 'reducers/bw_letterheading/bw_letterheadingListReducers';
import form from 'reducers/bw_letterheading/bw_letterheadingFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
