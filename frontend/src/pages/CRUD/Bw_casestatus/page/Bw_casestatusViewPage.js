import React, { useEffect } from 'react';
import Bw_casestatusWidget from 'pages/CRUD/Bw_casestatus/page/Bw_casestatusWidget';
import actions from 'actions/bw_casestatus/bw_casestatusFormActions';
import { connect } from 'react-redux';

const Bw_casestatusViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_casestatusWidget
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

export default connect(mapStateToProps)(Bw_casestatusViewPage);
