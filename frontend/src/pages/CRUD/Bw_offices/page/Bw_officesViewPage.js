import React, { useEffect } from 'react';
import Bw_officesWidget from 'pages/CRUD/Bw_offices/page/Bw_officesWidget';
import actions from 'actions/bw_offices/bw_officesFormActions';
import { connect } from 'react-redux';

const Bw_officesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_officesWidget
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

export default connect(mapStateToProps)(Bw_officesViewPage);
