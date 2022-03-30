import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'BW_SUPERVISORS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_SUPERVISORS_FORM_FIND_STARTED',
      });

      axios.get(`/bw_supervisors/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'BW_SUPERVISORS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_SUPERVISORS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/bw_supervisors'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_SUPERVISORS_FORM_CREATE_STARTED',
      });

      axios.post('/bw_supervisors', { data: values }).then(res => {
        dispatch({
          type: 'BW_SUPERVISORS_FORM_CREATE_SUCCESS',
        });

        toast.success('Bw_supervisors created');
        dispatch(push('/admin/bw_supervisors'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_SUPERVISORS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'BW_SUPERVISORS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/bw_supervisors/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'BW_SUPERVISORS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Bw_supervisors updated');
        dispatch(push('/admin/bw_supervisors'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_SUPERVISORS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
