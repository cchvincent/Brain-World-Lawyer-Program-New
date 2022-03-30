import React, { useEffect } from 'react';
import LetterheadingWidget from 'pages/CRUD/Letterheading/page/LetterheadingWidget';
import actions from 'actions/letterheading/letterheadingFormActions';
import { connect } from 'react-redux';

const LetterheadingViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <LetterheadingWidget
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

export default connect(mapStateToProps)(LetterheadingViewPage);
