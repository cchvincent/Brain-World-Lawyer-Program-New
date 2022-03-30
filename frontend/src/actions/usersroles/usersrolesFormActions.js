import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'USERSROLES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERSROLES_FORM_FIND_STARTED',
      });

      axios.get(`/usersroles/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'USERSROLES_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERSROLES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/usersroles'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'USERSROLES_FORM_CREATE_STARTED',
      });

      axios.post('/usersroles', { data: values }).then(res => {
        dispatch({
          type: 'USERSROLES_FORM_CREATE_SUCCESS',
        });

        toast.success('Usersroles created');
        dispatch(push('/admin/usersroles'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERSROLES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'USERSROLES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/usersroles/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'USERSROLES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Usersroles updated');
        dispatch(push('/admin/usersroles'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'USERSROLES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
