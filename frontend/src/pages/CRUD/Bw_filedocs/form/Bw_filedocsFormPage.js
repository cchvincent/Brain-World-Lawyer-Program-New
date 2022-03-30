import React, { useState, useEffect } from 'react';
import Bw_filedocsForm from 'pages/CRUD/Bw_filedocs/form/Bw_filedocsForm';
import { push } from 'connected-react-router';
import actions from 'actions/bw_filedocs/bw_filedocsFormActions';
import { connect } from 'react-redux';

const Bw_filedocsFormPage = (props) => {

  const {
    dispatch,
    match,
    saveLoading,
    findLoading,
    record,
    currentUser
  } = props;

  const [dispatched, setDispatched] = useState(false);

  const isEditing = () => {
    return !!match.params.id;
  };

  const isProfile = () => {
    return match.url === '/app/profile';
  };

  const doSubmit = (id, data) => {
    if (isEditing() || isProfile()) {
      dispatch(actions.doUpdate(id, data, isProfile()))
    } else {
      dispatch(actions.doCreate(data))
    }
  };

  useEffect(() => {
    if (isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      if (isProfile()) {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const currentUserId = currentUser.user.id;
        dispatch(actions.doFind(currentUserId));
      } else {
        dispatch(actions.doNew())
      }
    }
    setDispatched(true);
  }, [match, dispatch])

  return (
    <React.Fragment>
      {dispatched && (
        <Bw_filedocsForm
        saveLoading={saveLoading}
        findLoading={findLoading}
        currentUser={currentUser}
        record={(isEditing() || isProfile()) ? record : {}}
        isEditing={isEditing()}
        isProfile={isProfile()}
        onSubmit={doSubmit}
        onCancel={() => dispatch(push('/admin/bw_filedocs'))}
        />
        )}
    </React.Fragment>
  );
}

function mapStateToProps(store) {
  return {
    findLoading: store.bw_filedocs.form.findLoading,
    saveLoading: store.bw_filedocs.form.saveLoading,
    record: store.bw_filedocs.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Bw_filedocsFormPage);
