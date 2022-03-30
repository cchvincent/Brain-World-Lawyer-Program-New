import React, { useEffect } from 'react';
import IntroducersWidget from 'pages/CRUD/Introducers/page/IntroducersWidget';
import actions from 'actions/introducers/introducersFormActions';
import { connect } from 'react-redux';

const IntroducersViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <IntroducersWidget
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

export default connect(mapStateToProps)(IntroducersViewPage);
