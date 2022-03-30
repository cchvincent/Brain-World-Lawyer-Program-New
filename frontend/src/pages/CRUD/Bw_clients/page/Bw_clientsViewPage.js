import React, { useEffect } from 'react';
import Bw_clientsWidget from 'pages/CRUD/Bw_clients/page/Bw_clientsWidget';
import actions from 'actions/bw_clients/bw_clientsFormActions';
import { connect } from 'react-redux';

const Bw_clientsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_clientsWidget
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

export default connect(mapStateToProps)(Bw_clientsViewPage);
