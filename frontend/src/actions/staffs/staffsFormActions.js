import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'STAFFS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'STAFFS_FORM_FIND_STARTED',
      });

      axios.get(`/staffs/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'STAFFS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STAFFS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/staffs'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'STAFFS_FORM_CREATE_STARTED',
      });

      axios.post('/staffs', { data: values }).then(res => {
        dispatch({
          type: 'STAFFS_FORM_CREATE_SUCCESS',
        });

        toast.success('Staffs created');
        dispatch(push('/admin/staffs'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STAFFS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'STAFFS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/staffs/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'STAFFS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Staffs updated');
        dispatch(push('/admin/staffs'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'STAFFS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
