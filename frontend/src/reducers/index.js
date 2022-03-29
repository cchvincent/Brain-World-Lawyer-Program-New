
import auth from 'reducers/auth';
import alerts from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import bw_files from 'reducers/bw_files/bw_filesReducers';

import bw_filedocs from 'reducers/bw_filedocs/bw_filedocsReducers';

import bw_clients from 'reducers/bw_clients/bw_clientsReducers';

import bw_companys from 'reducers/bw_companys/bw_companysReducers';

import bw_caseserial from 'reducers/bw_caseserial/bw_caseserialReducers';

import bw_casestatus from 'reducers/bw_casestatus/bw_casestatusReducers';

import bw_casetypes from 'reducers/bw_casetypes/bw_casetypesReducers';

import bw_category from 'reducers/bw_category/bw_categoryReducers';

import bw_caseheaderreferences from 'reducers/bw_caseheaderreferences/bw_caseheaderreferencesReducers';

import users from 'reducers/users/usersReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    alerts,
    auth,
    navigation,

    bw_files,

    bw_filedocs,

    bw_clients,

    bw_companys,

    bw_caseserial,

    bw_casestatus,

    bw_casetypes,

    bw_category,

    bw_caseheaderreferences,

    users,

  });

