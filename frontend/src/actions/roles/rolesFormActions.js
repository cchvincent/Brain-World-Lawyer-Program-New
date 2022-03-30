import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'ROLES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'ROLES_FORM_FIND_STARTED',
      });

      axios.get(`/roles/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'ROLES_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ROLES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/roles'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'ROLES_FORM_CREATE_STARTED',
      });

      axios.post('/roles', { data: values }).then(res => {
        dispatch({
          type: 'ROLES_FORM_CREATE_SUCCESS',
        });

        toast.success('Roles created');
        dispatch(push('/admin/roles'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ROLES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'ROLES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/roles/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'ROLES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Roles updated');
        dispatch(push('/admin/roles'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'ROLES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
