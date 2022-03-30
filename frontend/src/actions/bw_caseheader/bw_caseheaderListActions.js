import Errors from 'components/FormItems/error/errors';
import axios from 'axios';

async function list(filter) {
  const response = await axios.get(
    `/bw_caseheader?page=${filter.page}&limit=${filter.limit}&bw_caseheader=${filter.bw_caseheader ? filter.bw_caseheader : ''}`,
  );
  return response.data;
}

async function filterBw_caseheader(request, filter) {
  const response = await axios.get(`/bw_caseheader?page=${filter.page}&limit=${filter.limit}${request}`);
  return response.data;
}

const actions = {

  doFilter: (request, filter) => async (
    dispatch,
    getState,
  ) => {
    try {

      const response = await filterBw_caseheader(request, filter);

      dispatch({
        type: 'BW_CASEHEADER_LIST_FILTERED',
        payload: {
          rows: response.rows,
        },
      });
    } catch (error) {
      Errors.handle(error);
      dispatch({
        type: 'BW_CASEHEADER_LIST_FETCH_ERROR',
      })
    }
  },

  doFetch: (filter, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'BW_CASEHEADER_LIST_FETCH_STARTED',
        payload: { filter, keepPagination },
      });

      const response = await list(filter);

      dispatch({
        type: 'BW_CASEHEADER_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_CASEHEADER_LIST_FETCH_ERROR',
      });
    }
  },

  doDelete: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'BW_CASEHEADER_LIST_DELETE_STARTED',
      });

      await axios.delete(`/bw_caseheader/${id}`)

      dispatch({
        type: 'BW_CASEHEADER_LIST_DELETE_SUCCESS',
      });

      const response = await list();
      dispatch({
        type: 'BW_CASEHEADER_LIST_FETCH_SUCCESS',
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'BW_CASEHEADER_LIST_DELETE_ERROR',
      });
    }
  },
  doOpenConfirm: (id) => async (dispatch) => {
      dispatch({
        type: 'BW_CASEHEADER_LIST_OPEN_CONFIRM',
        payload: {
          id: id
        },
      });
  },
  doCloseConfirm: () => async (dispatch) => {
      dispatch({
        type: 'BW_CASEHEADER_LIST_CLOSE_CONFIRM',
      });
  },
};


export default actions;
