import React, { useState, useEffect } from 'react';
import LetterheadingForm from 'pages/CRUD/Letterheading/form/LetterheadingForm';
import { push } from 'connected-react-router';
import actions from 'actions/letterheading/letterheadingFormActions';
import { connect } from 'react-redux';

const LetterheadingFormPage = (props) => {

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
        <LetterheadingForm
        saveLoading={saveLoading}
        findLoading={findLoading}
        currentUser={currentUser}
        record={(isEditing() || isProfile()) ? record : {}}
        isEditing={isEditing()}
        isProfile={isProfile()}
        onSubmit={doSubmit}
        onCancel={() => dispatch(push('/admin/letterheading'))}
        />
        )}
    </React.Fragment>
  );
}

function mapStateToProps(store) {
  return {
    findLoading: store.letterheading.form.findLoading,
    saveLoading: store.letterheading.form.saveLoading,
    record: store.letterheading.form.record,
    currentUser: store.auth.currentUser,
  };
}

export default connect(mapStateToProps)(LetterheadingFormPage);
