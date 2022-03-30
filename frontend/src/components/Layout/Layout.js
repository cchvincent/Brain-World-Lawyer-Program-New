import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import classnames from 'classnames'
import Icon from '@mdi/react'
import {
    mdiSettings as SettingsIcon,
    mdiFacebookBox as FacebookIcon,
    mdiTwitterBox as TwitterIcon,
    mdiGithubBox as GithubIcon,
} from '@mdi/js'
import {
    Fab,
    IconButton
} from '@material-ui/core'
import { connect } from 'react-redux';
// styles
import useStyles from './styles'

// components
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { Link } from '../Wrappers'
import ColorChangeThemePopper from './components/ColorChangeThemePopper'

import EditUser from '../../pages/user/EditUser';

// pages
import Dashboard from '../../pages/dashboard'
import BreadCrumbs from '../../components/BreadCrumbs'

// context
import { useLayoutState } from '../../context/LayoutContext'

import HandlersFormPage from 'pages/CRUD/Handlers/form/HandlersFormPage';
import HandlersTablePage from 'pages/CRUD/Handlers/table/HandlersTablePage';
import HandlersViewPage from 'pages/CRUD/Handlers/page/HandlersViewPage';

import IntroducersFormPage from 'pages/CRUD/Introducers/form/IntroducersFormPage';
import IntroducersTablePage from 'pages/CRUD/Introducers/table/IntroducersTablePage';
import IntroducersViewPage from 'pages/CRUD/Introducers/page/IntroducersViewPage';

import LetterheadingFormPage from 'pages/CRUD/Letterheading/form/LetterheadingFormPage';
import LetterheadingTablePage from 'pages/CRUD/Letterheading/table/LetterheadingTablePage';
import LetterheadingViewPage from 'pages/CRUD/Letterheading/page/LetterheadingViewPage';

import OfficesFormPage from 'pages/CRUD/Offices/form/OfficesFormPage';
import OfficesTablePage from 'pages/CRUD/Offices/table/OfficesTablePage';
import OfficesViewPage from 'pages/CRUD/Offices/page/OfficesViewPage';

import ProgressFormPage from 'pages/CRUD/Progress/form/ProgressFormPage';
import ProgressTablePage from 'pages/CRUD/Progress/table/ProgressTablePage';
import ProgressViewPage from 'pages/CRUD/Progress/page/ProgressViewPage';

import RefnofilesseqFormPage from 'pages/CRUD/Refnofilesseq/form/RefnofilesseqFormPage';
import RefnofilesseqTablePage from 'pages/CRUD/Refnofilesseq/table/RefnofilesseqTablePage';
import RefnofilesseqViewPage from 'pages/CRUD/Refnofilesseq/page/RefnofilesseqViewPage';

import RolesFormPage from 'pages/CRUD/Roles/form/RolesFormPage';
import RolesTablePage from 'pages/CRUD/Roles/table/RolesTablePage';
import RolesViewPage from 'pages/CRUD/Roles/page/RolesViewPage';

import StaffsFormPage from 'pages/CRUD/Staffs/form/StaffsFormPage';
import StaffsTablePage from 'pages/CRUD/Staffs/table/StaffsTablePage';
import StaffsViewPage from 'pages/CRUD/Staffs/page/StaffsViewPage';

import SupervisorsFormPage from 'pages/CRUD/Supervisors/form/SupervisorsFormPage';
import SupervisorsTablePage from 'pages/CRUD/Supervisors/table/SupervisorsTablePage';
import SupervisorsViewPage from 'pages/CRUD/Supervisors/page/SupervisorsViewPage';

import UsersrolesFormPage from 'pages/CRUD/Usersroles/form/UsersrolesFormPage';
import UsersrolesTablePage from 'pages/CRUD/Usersroles/table/UsersrolesTablePage';
import UsersrolesViewPage from 'pages/CRUD/Usersroles/page/UsersrolesViewPage';

import Bw_casefilesFormPage from 'pages/CRUD/Bw_casefiles/form/Bw_casefilesFormPage';
import Bw_casefilesTablePage from 'pages/CRUD/Bw_casefiles/table/Bw_casefilesTablePage';
import Bw_casefilesViewPage from 'pages/CRUD/Bw_casefiles/page/Bw_casefilesViewPage';

import Bw_filedocsFormPage from 'pages/CRUD/Bw_filedocs/form/Bw_filedocsFormPage';
import Bw_filedocsTablePage from 'pages/CRUD/Bw_filedocs/table/Bw_filedocsTablePage';
import Bw_filedocsViewPage from 'pages/CRUD/Bw_filedocs/page/Bw_filedocsViewPage';

import Bw_clientsFormPage from 'pages/CRUD/Bw_clients/form/Bw_clientsFormPage';
import Bw_clientsTablePage from 'pages/CRUD/Bw_clients/table/Bw_clientsTablePage';
import Bw_clientsViewPage from 'pages/CRUD/Bw_clients/page/Bw_clientsViewPage';

import Bw_companysFormPage from 'pages/CRUD/Bw_companys/form/Bw_companysFormPage';
import Bw_companysTablePage from 'pages/CRUD/Bw_companys/table/Bw_companysTablePage';
import Bw_companysViewPage from 'pages/CRUD/Bw_companys/page/Bw_companysViewPage';

import Bw_caseserialFormPage from 'pages/CRUD/Bw_caseserial/form/Bw_caseserialFormPage';
import Bw_caseserialTablePage from 'pages/CRUD/Bw_caseserial/table/Bw_caseserialTablePage';
import Bw_caseserialViewPage from 'pages/CRUD/Bw_caseserial/page/Bw_caseserialViewPage';

import Bw_casestatusFormPage from 'pages/CRUD/Bw_casestatus/form/Bw_casestatusFormPage';
import Bw_casestatusTablePage from 'pages/CRUD/Bw_casestatus/table/Bw_casestatusTablePage';
import Bw_casestatusViewPage from 'pages/CRUD/Bw_casestatus/page/Bw_casestatusViewPage';

import Bw_casetypesFormPage from 'pages/CRUD/Bw_casetypes/form/Bw_casetypesFormPage';
import Bw_casetypesTablePage from 'pages/CRUD/Bw_casetypes/table/Bw_casetypesTablePage';
import Bw_casetypesViewPage from 'pages/CRUD/Bw_casetypes/page/Bw_casetypesViewPage';

import Bw_categoryFormPage from 'pages/CRUD/Bw_category/form/Bw_categoryFormPage';
import Bw_categoryTablePage from 'pages/CRUD/Bw_category/table/Bw_categoryTablePage';
import Bw_categoryViewPage from 'pages/CRUD/Bw_category/page/Bw_categoryViewPage';

import Bw_caseheaderreferencesFormPage from 'pages/CRUD/Bw_caseheaderreferences/form/Bw_caseheaderreferencesFormPage';
import Bw_caseheaderreferencesTablePage from 'pages/CRUD/Bw_caseheaderreferences/table/Bw_caseheaderreferencesTablePage';
import Bw_caseheaderreferencesViewPage from 'pages/CRUD/Bw_caseheaderreferences/page/Bw_caseheaderreferencesViewPage';

import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';
import UsersViewPage from 'pages/CRUD/Users/page/UsersViewPage';

function Layout(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)
    const id = open ? 'add-section-popover' : undefined
    const handleClick = event => {
        setAnchorEl(open ? null : event.currentTarget)
    }

    // global
    let layoutState = useLayoutState()

    return (
        <div className={classes.root}>
            <Header history={props.history} />
            <Sidebar />
            <div
                className={classnames(classes.content, {
                    [classes.contentShift]: layoutState.isSidebarOpened,
                })}
            >
                <div className={classes.fakeToolbar} />
                <BreadCrumbs />
                <Switch>

                    <Route path="/admin/dashboard" component={Dashboard} />
                    <Route path="/admin/user/edit" component={EditUser} />

                    <Route path={"/admin/handlers"} exact component={HandlersTablePage} />
                    <Route path={"/admin/handlers/new"} exact component={HandlersFormPage} />
                    <Route path={"/admin/handlers/:id/edit"} exact component={HandlersFormPage} />
                    <Route path={"/admin/handlers/:id"} exact component={HandlersViewPage} />

                    <Route path={"/admin/introducers"} exact component={IntroducersTablePage} />
                    <Route path={"/admin/introducers/new"} exact component={IntroducersFormPage} />
                    <Route path={"/admin/introducers/:id/edit"} exact component={IntroducersFormPage} />
                    <Route path={"/admin/introducers/:id"} exact component={IntroducersViewPage} />

                    <Route path={"/admin/letterheading"} exact component={LetterheadingTablePage} />
                    <Route path={"/admin/letterheading/new"} exact component={LetterheadingFormPage} />
                    <Route path={"/admin/letterheading/:id/edit"} exact component={LetterheadingFormPage} />
                    <Route path={"/admin/letterheading/:id"} exact component={LetterheadingViewPage} />

                    <Route path={"/admin/offices"} exact component={OfficesTablePage} />
                    <Route path={"/admin/offices/new"} exact component={OfficesFormPage} />
                    <Route path={"/admin/offices/:id/edit"} exact component={OfficesFormPage} />
                    <Route path={"/admin/offices/:id"} exact component={OfficesViewPage} />

                    <Route path={"/admin/progress"} exact component={ProgressTablePage} />
                    <Route path={"/admin/progress/new"} exact component={ProgressFormPage} />
                    <Route path={"/admin/progress/:id/edit"} exact component={ProgressFormPage} />
                    <Route path={"/admin/progress/:id"} exact component={ProgressViewPage} />

                    <Route path={"/admin/refnofilesseq"} exact component={RefnofilesseqTablePage} />
                    <Route path={"/admin/refnofilesseq/new"} exact component={RefnofilesseqFormPage} />
                    <Route path={"/admin/refnofilesseq/:id/edit"} exact component={RefnofilesseqFormPage} />
                    <Route path={"/admin/refnofilesseq/:id"} exact component={RefnofilesseqViewPage} />

                    <Route path={"/admin/roles"} exact component={RolesTablePage} />
                    <Route path={"/admin/roles/new"} exact component={RolesFormPage} />
                    <Route path={"/admin/roles/:id/edit"} exact component={RolesFormPage} />
                    <Route path={"/admin/roles/:id"} exact component={RolesViewPage} />

                    <Route path={"/admin/staffs"} exact component={StaffsTablePage} />
                    <Route path={"/admin/staffs/new"} exact component={StaffsFormPage} />
                    <Route path={"/admin/staffs/:id/edit"} exact component={StaffsFormPage} />
                    <Route path={"/admin/staffs/:id"} exact component={StaffsViewPage} />

                    <Route path={"/admin/supervisors"} exact component={SupervisorsTablePage} />
                    <Route path={"/admin/supervisors/new"} exact component={SupervisorsFormPage} />
                    <Route path={"/admin/supervisors/:id/edit"} exact component={SupervisorsFormPage} />
                    <Route path={"/admin/supervisors/:id"} exact component={SupervisorsViewPage} />

                    <Route path={"/admin/usersroles"} exact component={UsersrolesTablePage} />
                    <Route path={"/admin/usersroles/new"} exact component={UsersrolesFormPage} />
                    <Route path={"/admin/usersroles/:id/edit"} exact component={UsersrolesFormPage} />
                    <Route path={"/admin/usersroles/:id"} exact component={UsersrolesViewPage} />

                    <Route path={"/admin/bw_casefiles"} exact component={Bw_casefilesTablePage} />
                    <Route path={"/admin/bw_casefiles/new"} exact component={Bw_casefilesFormPage} />
                    <Route path={"/admin/bw_casefiles/:id/edit"} exact component={Bw_casefilesFormPage} />
                    <Route path={"/admin/bw_casefiles/:id"} exact component={Bw_casefilesViewPage} />

                    <Route path={"/admin/bw_filedocs"} exact component={Bw_filedocsTablePage} />
                    <Route path={"/admin/bw_filedocs/new"} exact component={Bw_filedocsFormPage} />
                    <Route path={"/admin/bw_filedocs/:id/edit"} exact component={Bw_filedocsFormPage} />
                    <Route path={"/admin/bw_filedocs/:id"} exact component={Bw_filedocsViewPage} />

                    <Route path={"/admin/bw_clients"} exact component={Bw_clientsTablePage} />
                    <Route path={"/admin/bw_clients/new"} exact component={Bw_clientsFormPage} />
                    <Route path={"/admin/bw_clients/:id/edit"} exact component={Bw_clientsFormPage} />
                    <Route path={"/admin/bw_clients/:id"} exact component={Bw_clientsViewPage} />

                    <Route path={"/admin/bw_companys"} exact component={Bw_companysTablePage} />
                    <Route path={"/admin/bw_companys/new"} exact component={Bw_companysFormPage} />
                    <Route path={"/admin/bw_companys/:id/edit"} exact component={Bw_companysFormPage} />
                    <Route path={"/admin/bw_companys/:id"} exact component={Bw_companysViewPage} />

                    <Route path={"/admin/bw_caseserial"} exact component={Bw_caseserialTablePage} />
                    <Route path={"/admin/bw_caseserial/new"} exact component={Bw_caseserialFormPage} />
                    <Route path={"/admin/bw_caseserial/:id/edit"} exact component={Bw_caseserialFormPage} />
                    <Route path={"/admin/bw_caseserial/:id"} exact component={Bw_caseserialViewPage} />

                    <Route path={"/admin/bw_casestatus"} exact component={Bw_casestatusTablePage} />
                    <Route path={"/admin/bw_casestatus/new"} exact component={Bw_casestatusFormPage} />
                    <Route path={"/admin/bw_casestatus/:id/edit"} exact component={Bw_casestatusFormPage} />
                    <Route path={"/admin/bw_casestatus/:id"} exact component={Bw_casestatusViewPage} />

                    <Route path={"/admin/bw_casetypes"} exact component={Bw_casetypesTablePage} />
                    <Route path={"/admin/bw_casetypes/new"} exact component={Bw_casetypesFormPage} />
                    <Route path={"/admin/bw_casetypes/:id/edit"} exact component={Bw_casetypesFormPage} />
                    <Route path={"/admin/bw_casetypes/:id"} exact component={Bw_casetypesViewPage} />

                    <Route path={"/admin/bw_category"} exact component={Bw_categoryTablePage} />
                    <Route path={"/admin/bw_category/new"} exact component={Bw_categoryFormPage} />
                    <Route path={"/admin/bw_category/:id/edit"} exact component={Bw_categoryFormPage} />
                    <Route path={"/admin/bw_category/:id"} exact component={Bw_categoryViewPage} />

                    <Route path={"/admin/bw_caseheaderreferences"} exact component={Bw_caseheaderreferencesTablePage} />
                    <Route path={"/admin/bw_caseheaderreferences/new"} exact component={Bw_caseheaderreferencesFormPage} />
                    <Route path={"/admin/bw_caseheaderreferences/:id/edit"} exact component={Bw_caseheaderreferencesFormPage} />
                    <Route path={"/admin/bw_caseheaderreferences/:id"} exact component={Bw_caseheaderreferencesViewPage} />

                    <Route path={"/admin/users"} exact component={UsersTablePage} />
                    <Route path={"/admin/users/new"} exact component={UsersFormPage} />
                    <Route path={"/admin/users/:id/edit"} exact component={UsersFormPage} />
                    <Route path={"/admin/users/:id"} exact component={UsersViewPage} />

                </Switch>
                <Fab
                    color="primary"
                    aria-label="settings"
                    onClick={e => handleClick(e)}
                    className={classes.changeThemeFab}
                    style={{ zIndex: 100 }}
                >
                    <Icon path={SettingsIcon} size={1} color="#fff" />
                </Fab>
                <ColorChangeThemePopper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                />
                <Footer>
                    <div>
                        <Link
                            color={'primary'}
                            href={'https://flatlogic.com/'}
                            target={'_blank'}
                            className={classes.link}
                        >
                            Flatlogic
                        </Link>
                        <Link
                            color={'primary'}
                            href={'https://flatlogic.com/about'}
                            target={'_blank'}
                            className={classes.link}
                        >
                            About Us
                        </Link>
                        <Link
                            color={'primary'}
                            href={'https://flatlogic.com/blog'}
                            target={'_blank'}
                            className={classes.link}
                        >
                            Blog
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={'https://www.facebook.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton aria-label="facebook">
                                <Icon
                                    path={FacebookIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                        <Link
                            href={'https://twitter.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton aria-label="twitter">
                                <Icon
                                    path={TwitterIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                        <Link
                            href={'https://github.com/flatlogic'}
                            target={'_blank'}
                        >
                            <IconButton
                                aria-label="github"
                                style={{ padding: '12px 0 12px 12px' }}
                            >
                                <Icon
                                    path={GithubIcon}
                                    size={1}
                                    color="#6E6E6E99"
                                />
                            </IconButton>
                        </Link>
                    </div>
                </Footer>
            </div>
        </div>
    )
}

export default withRouter(connect()(Layout))
