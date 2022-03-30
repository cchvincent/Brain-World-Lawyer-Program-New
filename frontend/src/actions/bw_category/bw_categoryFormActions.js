import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'BW_CATEGORY_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_CATEGORY_FORM_FIND_STARTED',
      });

      axios.get(`/bw_category/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'BW_CATEGORY_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_CATEGORY_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/bw_category'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_CATEGORY_FORM_CREATE_STARTED',
      });

      axios.post('/bw_category', { data: values }).then(res => {
        dispatch({
          type: 'BW_CATEGORY_FORM_CREATE_SUCCESS',
        });

        toast.success('Bw_category created');
        dispatch(push('/admin/bw_category'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_CATEGORY_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'BW_CATEGORY_FORM_UPDATE_STARTED',
      });

      await axios.put(`/bw_category/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'BW_CATEGORY_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Bw_category updated');
        dispatch(push('/admin/bw_category'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_CATEGORY_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
