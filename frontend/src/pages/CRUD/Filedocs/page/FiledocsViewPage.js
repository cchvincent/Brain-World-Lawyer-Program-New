import React, { useEffect } from 'react';
import FiledocsWidget from 'pages/CRUD/Filedocs/page/FiledocsWidget';
import actions from 'actions/filedocs/filedocsFormActions';
import { connect } from 'react-redux';

const FiledocsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <FiledocsWidget
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

export default connect(mapStateToProps)(FiledocsViewPage);
