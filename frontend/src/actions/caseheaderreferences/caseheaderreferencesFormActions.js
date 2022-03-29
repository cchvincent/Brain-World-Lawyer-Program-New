import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'CASEHEADERREFERENCES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'CASEHEADERREFERENCES_FORM_FIND_STARTED',
      });

      axios.get(`/caseheaderreferences/${id}`).then((res) => {
        const record = res.data;

        dispatch({
          type: 'CASEHEADERREFERENCES_FORM_FIND_SUCCESS',
          payload: record,
        });
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASEHEADERREFERENCES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/caseheaderreferences'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'CASEHEADERREFERENCES_FORM_CREATE_STARTED',
      });

      axios.post('/caseheaderreferences', { data: values }).then((res) => {
        dispatch({
          type: 'CASEHEADERREFERENCES_FORM_CREATE_SUCCESS',
        });

        toast.success('Caseheaderreferences created');
        dispatch(push('/admin/caseheaderreferences'));
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASEHEADERREFERENCES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'CASEHEADERREFERENCES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/caseheaderreferences/${id}`, { id, data: values });

      dispatch(doInit());

      dispatch({
        type: 'CASEHEADERREFERENCES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Caseheaderreferences updated');
        dispatch(push('/admin/caseheaderreferences'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASEHEADERREFERENCES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
