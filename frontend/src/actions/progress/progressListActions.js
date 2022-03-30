import Errors from 'components/FormItems/error/errors';
import axios from 'axios';

async function list(filter) {
  const response = await axios.get(
    `/progress?page=${filter.page}&limit=${filter.limit}&progress=${filter.progress ? filter.progress : ''}`,
  );
  return response.data;
}

async function filterProgress(request, filter) {
  const response = await axios.get(`/progress?page=${filter.page}&limit=${filter.limit}${request}`);
  return response.data;
}

const actions = {

  doFilter: (request, filter) => async (
    dispatch,
    getState,
  ) => {
    try {

      const response = await filterProgress(request, filter);

      dispatch({
        type: 'PROGRESS_LIST_FILTERED',
        payload: {
          rows: response.rows,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'PROGRESS_LIST_FETCH_ERROR',
      })
    }
  },

  doFetch: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'PROGRESS_LIST_FETCH_STARTED',
        payload: { filter, keepPagination },
      });

      const response = await list(filter);

      dispatch({
        type: 'PROGRESS_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PROGRESS_LIST_FETCH_ERROR',
      });
    }
  },

  doDelete: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'PROGRESS_LIST_DELETE_STARTED',
      });

      await axios.delete(`/progress/${id}`)

      dispatch({
        type: 'PROGRESS_LIST_DELETE_SUCCESS',
      });

      const response = await list();
      dispatch({
        type: 'PROGRESS_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'PROGRESS_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
      dispatch({
        type: 'PROGRESS_LIST_OPEN_CONFIRM',
        payload: {
          id: id
        },
      });
  },
  doCloseConfirm: () => async (dispatch) => {
      dispatch({
        type: 'PROGRESS_LIST_CLOSE_CONFIRM',
      });
  },
};


export default actions;
