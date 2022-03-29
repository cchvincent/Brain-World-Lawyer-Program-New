import React, { useEffect } from 'react';
import FilesWidget from 'pages/CRUD/Files/page/FilesWidget';
import actions from 'actions/files/filesFormActions';
import { connect } from 'react-redux';

const FilesViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <FilesWidget
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

export default connect(mapStateToProps)(FilesViewPage);
