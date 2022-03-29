import React, { useEffect } from 'react';
import CategoryWidget from 'pages/CRUD/Category/page/CategoryWidget';
import actions from 'actions/category/categoryFormActions';
import { connect } from 'react-redux';

const CategoryViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <CategoryWidget
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

export default connect(mapStateToProps)(CategoryViewPage);
