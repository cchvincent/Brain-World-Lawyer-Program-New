import list from 'reducers/refnofilesseq/refnofilesseqListReducers';
import form from 'reducers/refnofilesseq/refnofilesseqFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
