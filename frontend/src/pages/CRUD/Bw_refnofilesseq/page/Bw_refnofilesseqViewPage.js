import React, { useEffect } from 'react';
import Bw_refnofilesseqWidget from 'pages/CRUD/Bw_refnofilesseq/page/Bw_refnofilesseqWidget';
import actions from 'actions/bw_refnofilesseq/bw_refnofilesseqFormActions';
import { connect } from 'react-redux';

const Bw_refnofilesseqViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Bw_refnofilesseqWidget
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

export default connect(mapStateToProps)(Bw_refnofilesseqViewPage);
