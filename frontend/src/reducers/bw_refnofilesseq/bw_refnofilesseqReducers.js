import list from 'reducers/bw_refnofilesseq/bw_refnofilesseqListReducers';
import form from 'reducers/bw_refnofilesseq/bw_refnofilesseqFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
