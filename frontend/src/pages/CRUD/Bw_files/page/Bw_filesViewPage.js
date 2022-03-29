import React, { useEffect } from 'react';
import Bw_filesWidget from 'pages/CRUD/Bw_files/page/Bw_filesWidget';
import actions from 'actions/bw_files/bw_filesFormActions';
import { connect } from 'react-redux';

const Bw_filesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_filesWidget
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

export default connect(mapStateToProps)(Bw_filesViewPage);
