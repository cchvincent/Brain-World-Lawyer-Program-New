import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'OFFICES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'OFFICES_FORM_FIND_STARTED',
      });

      axios.get(`/offices/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'OFFICES_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'OFFICES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/offices'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'OFFICES_FORM_CREATE_STARTED',
      });

      axios.post('/offices', { data: values }).then(res => {
        dispatch({
          type: 'OFFICES_FORM_CREATE_SUCCESS',
        });

        toast.success('Offices created');
        dispatch(push('/admin/offices'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'OFFICES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'OFFICES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/offices/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'OFFICES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Offices updated');
        dispatch(push('/admin/offices'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'OFFICES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
