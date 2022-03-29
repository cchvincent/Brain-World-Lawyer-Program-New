import React, { useEffect } from 'react';
import CaseserialWidget from 'pages/CRUD/Caseserial/page/CaseserialWidget';
import actions from 'actions/caseserial/caseserialFormActions';
import { connect } from 'react-redux';

const CaseserialViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <CaseserialWidget
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

export default connect(mapStateToProps)(CaseserialViewPage);
