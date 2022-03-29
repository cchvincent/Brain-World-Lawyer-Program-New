import React, { useEffect } from 'react';
import Bw_filedocsWidget from 'pages/CRUD/Bw_filedocs/page/Bw_filedocsWidget';
import actions from 'actions/bw_filedocs/bw_filedocsFormActions';
import { connect } from 'react-redux';

const Bw_filedocsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_filedocsWidget
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

export default connect(mapStateToProps)(Bw_filedocsViewPage);
