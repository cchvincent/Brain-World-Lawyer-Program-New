import React, { useEffect } from 'react';
import Bw_introducersWidget from 'pages/CRUD/Bw_introducers/page/Bw_introducersWidget';
import actions from 'actions/bw_introducers/bw_introducersFormActions';
import { connect } from 'react-redux';

const Bw_introducersViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_introducersWidget
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

export default connect(mapStateToProps)(Bw_introducersViewPage);
