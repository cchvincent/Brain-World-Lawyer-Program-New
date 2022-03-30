import React, { useEffect } from 'react';
import Bw_casetypesWidget from 'pages/CRUD/Bw_casetypes/page/Bw_casetypesWidget';
import actions from 'actions/bw_casetypes/bw_casetypesFormActions';
import { connect } from 'react-redux';

const Bw_casetypesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_casetypesWidget
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

export default connect(mapStateToProps)(Bw_casetypesViewPage);
