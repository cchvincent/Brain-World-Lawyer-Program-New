import React, { useEffect } from 'react';
import Bw_staffsWidget from 'pages/CRUD/Bw_staffs/page/Bw_staffsWidget';
import actions from 'actions/bw_staffs/bw_staffsFormActions';
import { connect } from 'react-redux';

const Bw_staffsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_staffsWidget
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

export default connect(mapStateToProps)(Bw_staffsViewPage);
