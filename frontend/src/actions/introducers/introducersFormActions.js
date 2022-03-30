import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'INTRODUCERS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'INTRODUCERS_FORM_FIND_STARTED',
      });

      axios.get(`/introducers/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'INTRODUCERS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'INTRODUCERS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/introducers'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'INTRODUCERS_FORM_CREATE_STARTED',
      });

      axios.post('/introducers', { data: values }).then(res => {
        dispatch({
          type: 'INTRODUCERS_FORM_CREATE_SUCCESS',
        });

        toast.success('Introducers created');
        dispatch(push('/admin/introducers'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'INTRODUCERS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'INTRODUCERS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/introducers/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'INTRODUCERS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Introducers updated');
        dispatch(push('/admin/introducers'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'INTRODUCERS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
