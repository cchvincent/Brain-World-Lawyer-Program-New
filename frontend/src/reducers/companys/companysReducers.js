import list from 'reducers/companys/companysListReducers';
import form from 'reducers/companys/companysFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
