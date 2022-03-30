import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'BW_CASEFILES_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_CASEFILES_FORM_FIND_STARTED',
      });

      axios.get(`/bw_casefiles/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'BW_CASEFILES_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_CASEFILES_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/bw_casefiles'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_CASEFILES_FORM_CREATE_STARTED',
      });

      axios.post('/bw_casefiles', { data: values }).then(res => {
        dispatch({
          type: 'BW_CASEFILES_FORM_CREATE_SUCCESS',
        });

        toast.success('Bw_casefiles created');
        dispatch(push('/admin/bw_casefiles'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_CASEFILES_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'BW_CASEFILES_FORM_UPDATE_STARTED',
      });

      await axios.put(`/bw_casefiles/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'BW_CASEFILES_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Bw_casefiles updated');
        dispatch(push('/admin/bw_casefiles'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_CASEFILES_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
