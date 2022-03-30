import React, { useEffect } from 'react';
import Bw_caseserialWidget from 'pages/CRUD/Bw_caseserial/page/Bw_caseserialWidget';
import actions from 'actions/bw_caseserial/bw_caseserialFormActions';
import { connect } from 'react-redux';

const Bw_caseserialViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_caseserialWidget
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

export default connect(mapStateToProps)(Bw_caseserialViewPage);
