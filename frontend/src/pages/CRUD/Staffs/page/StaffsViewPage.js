import React, { useEffect } from 'react';
import StaffsWidget from 'pages/CRUD/Staffs/page/StaffsWidget';
import actions from 'actions/staffs/staffsFormActions';
import { connect } from 'react-redux';

const StaffsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <StaffsWidget
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

export default connect(mapStateToProps)(StaffsViewPage);
