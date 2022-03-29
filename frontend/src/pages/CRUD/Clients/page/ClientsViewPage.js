import React, { useEffect } from 'react';
import ClientsWidget from 'pages/CRUD/Clients/page/ClientsWidget';
import actions from 'actions/clients/clientsFormActions';
import { connect } from 'react-redux';

const ClientsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <ClientsWidget
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

export default connect(mapStateToProps)(ClientsViewPage);
