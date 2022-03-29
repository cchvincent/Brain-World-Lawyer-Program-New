import React, { useEffect } from 'react';
import CasestatusWidget from 'pages/CRUD/Casestatus/page/CasestatusWidget';
import actions from 'actions/casestatus/casestatusFormActions';
import { connect } from 'react-redux';

const CasestatusViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <CasestatusWidget
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

export default connect(mapStateToProps)(CasestatusViewPage);
