import React, { useEffect } from 'react';
import OfficesWidget from 'pages/CRUD/Offices/page/OfficesWidget';
import actions from 'actions/offices/officesFormActions';
import { connect } from 'react-redux';

const OfficesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <OfficesWidget
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

export default connect(mapStateToProps)(OfficesViewPage);
