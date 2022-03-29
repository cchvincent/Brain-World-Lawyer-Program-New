import React, { useEffect } from 'react';
import Bw_categoryWidget from 'pages/CRUD/Bw_category/page/Bw_categoryWidget';
import actions from 'actions/bw_category/bw_categoryFormActions';
import { connect } from 'react-redux';

const Bw_categoryViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_categoryWidget
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

export default connect(mapStateToProps)(Bw_categoryViewPage);
