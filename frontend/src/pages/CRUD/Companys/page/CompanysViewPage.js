import React, { useEffect } from 'react';
import CompanysWidget from 'pages/CRUD/Companys/page/CompanysWidget';
import actions from 'actions/companys/companysFormActions';
import { connect } from 'react-redux';

const CompanysViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <CompanysWidget
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

export default connect(mapStateToProps)(CompanysViewPage);
