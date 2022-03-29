import React, { useEffect } from 'react';
import CasetypesWidget from 'pages/CRUD/Casetypes/page/CasetypesWidget';
import actions from 'actions/casetypes/casetypesFormActions';
import { connect } from 'react-redux';

const CasetypesViewPage = (props) => {
  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [match]);

  return (
    <React.Fragment>
      <CasetypesWidget loading={loading} record={record} />
    </React.Fragment>
  );
};

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(CasetypesViewPage);
