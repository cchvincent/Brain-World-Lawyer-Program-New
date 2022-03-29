import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'FILEDOCS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'FILEDOCS_FORM_FIND_STARTED',
      });

      axios.get(`/filedocs/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'FILEDOCS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'FILEDOCS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/filedocs'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'FILEDOCS_FORM_CREATE_STARTED',
      });

      axios.post('/filedocs', { data: values }).then(res => {
        dispatch({
          type: 'FILEDOCS_FORM_CREATE_SUCCESS',
        });

        toast.success('Filedocs created');
        dispatch(push('/admin/filedocs'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'FILEDOCS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'FILEDOCS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/filedocs/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'FILEDOCS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Filedocs updated');
        dispatch(push('/admin/filedocs'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'FILEDOCS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
