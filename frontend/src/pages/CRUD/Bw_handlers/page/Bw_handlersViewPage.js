import React, { useEffect } from 'react';
import Bw_handlersWidget from 'pages/CRUD/Bw_handlers/page/Bw_handlersWidget';
import actions from 'actions/bw_handlers/bw_handlersFormActions';
import { connect } from 'react-redux';

const Bw_handlersViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_handlersWidget
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

export default connect(mapStateToProps)(Bw_handlersViewPage);
