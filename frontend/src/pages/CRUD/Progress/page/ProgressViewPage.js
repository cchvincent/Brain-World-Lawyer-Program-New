import React, { useEffect } from 'react';
import ProgressWidget from 'pages/CRUD/Progress/page/ProgressWidget';
import actions from 'actions/progress/progressFormActions';
import { connect } from 'react-redux';

const ProgressViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <ProgressWidget
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

export default connect(mapStateToProps)(ProgressViewPage);
