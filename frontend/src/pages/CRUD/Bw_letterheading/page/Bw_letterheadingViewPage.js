import React, { useEffect } from 'react';
import Bw_letterheadingWidget from 'pages/CRUD/Bw_letterheading/page/Bw_letterheadingWidget';
import actions from 'actions/bw_letterheading/bw_letterheadingFormActions';
import { connect } from 'react-redux';

const Bw_letterheadingViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_letterheadingWidget
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

export default connect(mapStateToProps)(Bw_letterheadingViewPage);
