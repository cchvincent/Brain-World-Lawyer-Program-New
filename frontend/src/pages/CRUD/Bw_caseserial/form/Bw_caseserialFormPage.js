import React, { useState, useEffect } from 'react';
import Bw_caseserialForm from 'pages/CRUD/Bw_caseserial/form/Bw_caseserialForm';
import { push } from 'connected-react-router';
import actions from 'actions/bw_caseserial/bw_caseserialFormActions';
import { connect } from 'react-redux';

const Bw_caseserialFormPage = (props) => {

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
        <Bw_caseserialForm
        saveLoading={saveLoading}
        findLoading={findLoading}
        currentUser={currentUser}
        record={(isEditing() || isProfile()) ? record : {}}
        isEditing={isEditing()}
        isProfile={isProfile()}
        onSubmit={doSubmit}
        onCancel={() => dispatch(push('/admin/bw_caseserial'))}
        />
        )}
    </React.Fragment>
  );
}

function mapStateToProps(store) {
  return {
    findLoading: store.bw_caseserial.form.findLoading,
    saveLoading: store.bw_caseserial.form.saveLoading,
    record: store.bw_caseserial.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(Bw_caseserialFormPage);
