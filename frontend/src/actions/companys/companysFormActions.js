import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'COMPANYS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'COMPANYS_FORM_FIND_STARTED',
      });

      axios.get(`/companys/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'COMPANYS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COMPANYS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/companys'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'COMPANYS_FORM_CREATE_STARTED',
      });

      axios.post('/companys', { data: values }).then(res => {
        dispatch({
          type: 'COMPANYS_FORM_CREATE_SUCCESS',
        });

        toast.success('Companys created');
        dispatch(push('/admin/companys'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COMPANYS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'COMPANYS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/companys/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'COMPANYS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Companys updated');
        dispatch(push('/admin/companys'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'COMPANYS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
