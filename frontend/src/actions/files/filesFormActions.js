import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'FILES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'FILES_FORM_FIND_STARTED',
      });

      axios.get(`/files/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'FILES_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'FILES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/files'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'FILES_FORM_CREATE_STARTED',
      });

      axios.post('/files', { data: values }).then(res => {
        dispatch({
          type: 'FILES_FORM_CREATE_SUCCESS',
        });

        toast.success('Files created');
        dispatch(push('/admin/files'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'FILES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'FILES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/files/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'FILES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Files updated');
        dispatch(push('/admin/files'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'FILES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
