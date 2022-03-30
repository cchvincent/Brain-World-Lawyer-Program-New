import React, { useEffect } from 'react';
import Bw_usersrolesWidget from 'pages/CRUD/Bw_usersroles/page/Bw_usersrolesWidget';
import actions from 'actions/bw_usersroles/bw_usersrolesFormActions';
import { connect } from 'react-redux';

const Bw_usersrolesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_usersrolesWidget
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

export default connect(mapStateToProps)(Bw_usersrolesViewPage);
