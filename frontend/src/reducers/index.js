import auth from 'reducers/auth';
import alerts from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import caseserial from 'reducers/caseserial/caseserialReducers';

import casestatus from 'reducers/casestatus/casestatusReducers';

import casetypes from 'reducers/casetypes/casetypesReducers';

import category from 'reducers/category/categoryReducers';

import users from 'reducers/users/usersReducers';

import caseheaderreferences from 'reducers/caseheaderreferences/caseheaderreferencesReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    alerts,
    auth,
    navigation,

    caseserial,

    casestatus,

    casetypes,

    category,

    users,

    caseheaderreferences,
  });
