import React, { useEffect } from 'react';
import Bw_companysWidget from 'pages/CRUD/Bw_companys/page/Bw_companysWidget';
import actions from 'actions/bw_companys/bw_companysFormActions';
import { connect } from 'react-redux';

const Bw_companysViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_companysWidget
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

export default connect(mapStateToProps)(Bw_companysViewPage);
