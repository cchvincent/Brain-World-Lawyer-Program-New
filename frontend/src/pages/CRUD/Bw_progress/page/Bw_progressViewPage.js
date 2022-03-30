import React, { useEffect } from 'react';
import Bw_progressWidget from 'pages/CRUD/Bw_progress/page/Bw_progressWidget';
import actions from 'actions/bw_progress/bw_progressFormActions';
import { connect } from 'react-redux';

const Bw_progressViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_progressWidget
      loading={loading}
      record={record}
      />
    </React.Fragment>
  );
}

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(Bw_progressViewPage);
