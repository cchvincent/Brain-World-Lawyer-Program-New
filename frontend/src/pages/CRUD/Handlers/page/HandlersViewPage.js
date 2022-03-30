import React, { useEffect } from 'react';
import HandlersWidget from 'pages/CRUD/Handlers/page/HandlersWidget';
import actions from 'actions/handlers/handlersFormActions';
import { connect } from 'react-redux';

const HandlersViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <HandlersWidget
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

export default connect(mapStateToProps)(HandlersViewPage);
