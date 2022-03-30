import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'BW_REFNOFILESSEQ_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_REFNOFILESSEQ_FORM_FIND_STARTED',
      });

      axios.get(`/bw_refnofilesseq/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'BW_REFNOFILESSEQ_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_REFNOFILESSEQ_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/bw_refnofilesseq'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_REFNOFILESSEQ_FORM_CREATE_STARTED',
      });

      axios.post('/bw_refnofilesseq', { data: values }).then(res => {
        dispatch({
          type: 'BW_REFNOFILESSEQ_FORM_CREATE_SUCCESS',
        });

        toast.success('Bw_refnofilesseq created');
        dispatch(push('/admin/bw_refnofilesseq'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_REFNOFILESSEQ_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'BW_REFNOFILESSEQ_FORM_UPDATE_STARTED',
      });

      await axios.put(`/bw_refnofilesseq/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'BW_REFNOFILESSEQ_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Bw_refnofilesseq updated');
        dispatch(push('/admin/bw_refnofilesseq'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_REFNOFILESSEQ_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
