import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'CASESERIAL_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'CASESERIAL_FORM_FIND_STARTED',
      });

      axios.get(`/caseserial/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'CASESERIAL_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASESERIAL_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/caseserial'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'CASESERIAL_FORM_CREATE_STARTED',
      });

      axios.post('/caseserial', { data: values }).then(res => {
        dispatch({
          type: 'CASESERIAL_FORM_CREATE_SUCCESS',
        });

        toast.success('Caseserial created');
        dispatch(push('/admin/caseserial'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASESERIAL_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'CASESERIAL_FORM_UPDATE_STARTED',
      });

      await axios.put(`/caseserial/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'CASESERIAL_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Caseserial updated');
        dispatch(push('/admin/caseserial'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASESERIAL_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
