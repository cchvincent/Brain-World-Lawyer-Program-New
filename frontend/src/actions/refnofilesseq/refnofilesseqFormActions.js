import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'REFNOFILESSEQ_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'REFNOFILESSEQ_FORM_FIND_STARTED',
      });

      axios.get(`/refnofilesseq/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'REFNOFILESSEQ_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'REFNOFILESSEQ_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/refnofilesseq'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'REFNOFILESSEQ_FORM_CREATE_STARTED',
      });

      axios.post('/refnofilesseq', { data: values }).then(res => {
        dispatch({
          type: 'REFNOFILESSEQ_FORM_CREATE_SUCCESS',
        });

        toast.success('Refnofilesseq created');
        dispatch(push('/admin/refnofilesseq'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'REFNOFILESSEQ_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'REFNOFILESSEQ_FORM_UPDATE_STARTED',
      });

      await axios.put(`/refnofilesseq/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'REFNOFILESSEQ_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Refnofilesseq updated');
        dispatch(push('/admin/refnofilesseq'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'REFNOFILESSEQ_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
