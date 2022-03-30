import React, { useState, useEffect } from 'react';
import Bw_supervisorsForm from 'pages/CRUD/Bw_supervisors/form/Bw_supervisorsForm';
import { push } from 'connected-react-router';
import actions from 'actions/bw_supervisors/bw_supervisorsFormActions';
import { connect } from 'react-redux';

const Bw_supervisorsFormPage = (props) => {

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
        <Bw_supervisorsForm
        saveLoading={saveLoading}
        findLoading={findLoading}
        currentUser={currentUser}
        record={(isEditing() || isProfile()) ? record : {}}
        isEditing={isEditing()}
        isProfile={isProfile()}
        onSubmit={doSubmit}
        onCancel={() => dispatch(push('/admin/bw_supervisors'))}
        />
        )}
    </React.Fragment>
  );
}

function mapStateToProps(store) {
  return {
    findLoading: store.bw_supervisors.form.findLoading,
    saveLoading: store.bw_supervisors.form.saveLoading,
    record: store.bw_supervisors.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Bw_supervisorsFormPage);
