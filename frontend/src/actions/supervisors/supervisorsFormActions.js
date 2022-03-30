import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'SUPERVISORS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'SUPERVISORS_FORM_FIND_STARTED',
      });

      axios.get(`/supervisors/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'SUPERVISORS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'SUPERVISORS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/supervisors'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'SUPERVISORS_FORM_CREATE_STARTED',
      });

      axios.post('/supervisors', { data: values }).then(res => {
        dispatch({
          type: 'SUPERVISORS_FORM_CREATE_SUCCESS',
        });

        toast.success('Supervisors created');
        dispatch(push('/admin/supervisors'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'SUPERVISORS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'SUPERVISORS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/supervisors/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'SUPERVISORS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Supervisors updated');
        dispatch(push('/admin/supervisors'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'SUPERVISORS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
