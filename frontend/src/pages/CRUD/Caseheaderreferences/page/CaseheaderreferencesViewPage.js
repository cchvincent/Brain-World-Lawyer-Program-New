import React, { useEffect } from 'react';
import CaseheaderreferencesWidget from 'pages/CRUD/Caseheaderreferences/page/CaseheaderreferencesWidget';
import actions from 'actions/caseheaderreferences/caseheaderreferencesFormActions';
import { connect } from 'react-redux';

const CaseheaderreferencesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <CaseheaderreferencesWidget
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

export default connect(mapStateToProps)(CaseheaderreferencesViewPage);
