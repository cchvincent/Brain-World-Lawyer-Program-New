import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'LETTERHEADING_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'LETTERHEADING_FORM_FIND_STARTED',
      });

      axios.get(`/letterheading/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'LETTERHEADING_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'LETTERHEADING_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/letterheading'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'LETTERHEADING_FORM_CREATE_STARTED',
      });

      axios.post('/letterheading', { data: values }).then(res => {
        dispatch({
          type: 'LETTERHEADING_FORM_CREATE_SUCCESS',
        });

        toast.success('Letterheading created');
        dispatch(push('/admin/letterheading'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'LETTERHEADING_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'LETTERHEADING_FORM_UPDATE_STARTED',
      });

      await axios.put(`/letterheading/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'LETTERHEADING_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Letterheading updated');
        dispatch(push('/admin/letterheading'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'LETTERHEADING_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
