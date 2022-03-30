import React, { useEffect } from 'react';
import Bw_caseheaderWidget from 'pages/CRUD/Bw_caseheader/page/Bw_caseheaderWidget';
import actions from 'actions/bw_caseheader/bw_caseheaderFormActions';
import { connect } from 'react-redux';

const Bw_caseheaderViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_caseheaderWidget
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

export default connect(mapStateToProps)(Bw_caseheaderViewPage);
