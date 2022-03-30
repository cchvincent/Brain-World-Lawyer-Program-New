import React, { useState, useEffect } from 'react';
import Bw_casetypesForm from 'pages/CRUD/Bw_casetypes/form/Bw_casetypesForm';
import { push } from 'connected-react-router';
import actions from 'actions/bw_casetypes/bw_casetypesFormActions';
import { connect } from 'react-redux';

const Bw_casetypesFormPage = (props) => {

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
        <Bw_casetypesForm
        saveLoading={saveLoading}
        findLoading={findLoading}
        currentUser={currentUser}
        record={(isEditing() || isProfile()) ? record : {}}
        isEditing={isEditing()}
        isProfile={isProfile()}
        onSubmit={doSubmit}
        onCancel={() => dispatch(push('/admin/bw_casetypes'))}
        />
        )}
    </React.Fragment>
  );
}

function mapStateToProps(store) {
  return {
    findLoading: store.bw_casetypes.form.findLoading,
    saveLoading: store.bw_casetypes.form.saveLoading,
    record: store.bw_casetypes.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Bw_casetypesFormPage);
