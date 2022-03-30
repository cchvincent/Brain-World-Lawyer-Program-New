import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'PROGRESS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'PROGRESS_FORM_FIND_STARTED',
      });

      axios.get(`/progress/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'PROGRESS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PROGRESS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/progress'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'PROGRESS_FORM_CREATE_STARTED',
      });

      axios.post('/progress', { data: values }).then(res => {
        dispatch({
          type: 'PROGRESS_FORM_CREATE_SUCCESS',
        });

        toast.success('Progress created');
        dispatch(push('/admin/progress'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PROGRESS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'PROGRESS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/progress/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'PROGRESS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Progress updated');
        dispatch(push('/admin/progress'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PROGRESS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
