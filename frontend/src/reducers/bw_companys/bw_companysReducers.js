import list from 'reducers/bw_companys/bw_companysListReducers';
import form from 'reducers/bw_companys/bw_companysFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
