import React, { useEffect } from 'react';
import RefnofilesseqWidget from 'pages/CRUD/Refnofilesseq/page/RefnofilesseqWidget';
import actions from 'actions/refnofilesseq/refnofilesseqFormActions';
import { connect } from 'react-redux';

const RefnofilesseqViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <RefnofilesseqWidget
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

export default connect(mapStateToProps)(RefnofilesseqViewPage);
