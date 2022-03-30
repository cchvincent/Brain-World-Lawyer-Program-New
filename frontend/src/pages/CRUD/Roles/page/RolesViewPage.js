import React, { useEffect } from 'react';
import RolesWidget from 'pages/CRUD/Roles/page/RolesWidget';
import actions from 'actions/roles/rolesFormActions';
import { connect } from 'react-redux';

const RolesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <RolesWidget
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

export default connect(mapStateToProps)(RolesViewPage);
