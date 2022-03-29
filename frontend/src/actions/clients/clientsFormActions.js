import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'CLIENTS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'CLIENTS_FORM_FIND_STARTED',
      });

      axios.get(`/clients/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'CLIENTS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CLIENTS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/clients'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'CLIENTS_FORM_CREATE_STARTED',
      });

      axios.post('/clients', { data: values }).then(res => {
        dispatch({
          type: 'CLIENTS_FORM_CREATE_SUCCESS',
        });

        toast.success('Clients created');
        dispatch(push('/admin/clients'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CLIENTS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'CLIENTS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/clients/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'CLIENTS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Clients updated');
        dispatch(push('/admin/clients'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CLIENTS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
