import React, { useEffect } from 'react';
import SupervisorsWidget from 'pages/CRUD/Supervisors/page/SupervisorsWidget';
import actions from 'actions/supervisors/supervisorsFormActions';
import { connect } from 'react-redux';

const SupervisorsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <SupervisorsWidget
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

export default connect(mapStateToProps)(SupervisorsViewPage);
