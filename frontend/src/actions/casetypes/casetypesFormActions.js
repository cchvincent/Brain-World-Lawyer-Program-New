import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'CASETYPES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'CASETYPES_FORM_FIND_STARTED',
      });

      axios.get(`/casetypes/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'CASETYPES_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASETYPES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/casetypes'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'CASETYPES_FORM_CREATE_STARTED',
      });

      axios.post('/casetypes', { data: values }).then(res => {
        dispatch({
          type: 'CASETYPES_FORM_CREATE_SUCCESS',
        });

        toast.success('Casetypes created');
        dispatch(push('/admin/casetypes'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASETYPES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'CASETYPES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/casetypes/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'CASETYPES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Casetypes updated');
        dispatch(push('/admin/casetypes'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'CASETYPES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
