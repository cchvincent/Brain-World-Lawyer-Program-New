import React, { useEffect } from 'react';
import Bw_rolesWidget from 'pages/CRUD/Bw_roles/page/Bw_rolesWidget';
import actions from 'actions/bw_roles/bw_rolesFormActions';
import { connect } from 'react-redux';

const Bw_rolesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_rolesWidget
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

export default connect(mapStateToProps)(Bw_rolesViewPage);
