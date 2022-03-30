
import auth from 'reducers/auth';
import alerts from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import bw_casefiles from 'reducers/bw_casefiles/bw_casefilesReducers';

import bw_filedocs from 'reducers/bw_filedocs/bw_filedocsReducers';

import bw_clients from 'reducers/bw_clients/bw_clientsReducers';

import bw_companys from 'reducers/bw_companys/bw_companysReducers';

import bw_caseserial from 'reducers/bw_caseserial/bw_caseserialReducers';

import bw_casestatus from 'reducers/bw_casestatus/bw_casestatusReducers';

import bw_casetypes from 'reducers/bw_casetypes/bw_casetypesReducers';

import bw_category from 'reducers/bw_category/bw_categoryReducers';

import bw_caseheader from 'reducers/bw_caseheader/bw_caseheaderReducers';

import bw_handlers from 'reducers/bw_handlers/bw_handlersReducers';

import bw_introducers from 'reducers/bw_introducers/bw_introducersReducers';

import bw_letterheading from 'reducers/bw_letterheading/bw_letterheadingReducers';

import bw_offices from 'reducers/bw_offices/bw_officesReducers';

import bw_progress from 'reducers/bw_progress/bw_progressReducers';

import bw_refnofilesseq from 'reducers/bw_refnofilesseq/bw_refnofilesseqReducers';

import bw_roles from 'reducers/bw_roles/bw_rolesReducers';

import bw_staffs from 'reducers/bw_staffs/bw_staffsReducers';

import bw_supervisors from 'reducers/bw_supervisors/bw_supervisorsReducers';

import bw_usersroles from 'reducers/bw_usersroles/bw_usersrolesReducers';

import users from 'reducers/users/usersReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    alerts,
    auth,
    navigation,

    bw_casefiles,

    bw_filedocs,

    bw_clients,

    bw_companys,

    bw_caseserial,

    bw_casestatus,

    bw_casetypes,

    bw_category,

    bw_caseheader,

    bw_handlers,

    bw_introducers,

    bw_letterheading,

    bw_offices,

    bw_progress,

    bw_refnofilesseq,

    bw_roles,

    bw_staffs,

    bw_supervisors,

    bw_usersroles,

    users,

  });

