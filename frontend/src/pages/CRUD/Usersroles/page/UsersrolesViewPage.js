import React, { useEffect } from 'react';
import UsersrolesWidget from 'pages/CRUD/Usersroles/page/UsersrolesWidget';
import actions from 'actions/usersroles/usersrolesFormActions';
import { connect } from 'react-redux';

const UsersrolesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <UsersrolesWidget
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

export default connect(mapStateToProps)(UsersrolesViewPage);
