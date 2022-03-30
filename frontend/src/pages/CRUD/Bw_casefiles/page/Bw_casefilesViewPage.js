import React, { useEffect } from 'react';
import Bw_casefilesWidget from 'pages/CRUD/Bw_casefiles/page/Bw_casefilesWidget';
import actions from 'actions/bw_casefiles/bw_casefilesFormActions';
import { connect } from 'react-redux';

const Bw_casefilesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_casefilesWidget
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

export default connect(mapStateToProps)(Bw_casefilesViewPage);
