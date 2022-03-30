import React, { useEffect } from 'react';
import Bw_supervisorsWidget from 'pages/CRUD/Bw_supervisors/page/Bw_supervisorsWidget';
import actions from 'actions/bw_supervisors/bw_supervisorsFormActions';
import { connect } from 'react-redux';

const Bw_supervisorsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_supervisorsWidget
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

export default connect(mapStateToProps)(Bw_supervisorsViewPage);
