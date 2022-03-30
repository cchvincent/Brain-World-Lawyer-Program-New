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

import Bw_caseheaderFormPage from 'pages/CRUD/Bw_caseheader/form/Bw_caseheaderFormPage';
import Bw_caseheaderTablePage from 'pages/CRUD/Bw_caseheader/table/Bw_caseheaderTablePage';
import Bw_caseheaderViewPage from 'pages/CRUD/Bw_caseheader/page/Bw_caseheaderViewPage';

import Bw_handlersFormPage from 'pages/CRUD/Bw_handlers/form/Bw_handlersFormPage';
import Bw_handlersTablePage from 'pages/CRUD/Bw_handlers/table/Bw_handlersTablePage';
import Bw_handlersViewPage from 'pages/CRUD/Bw_handlers/page/Bw_handlersViewPage';

import Bw_introducersFormPage from 'pages/CRUD/Bw_introducers/form/Bw_introducersFormPage';
import Bw_introducersTablePage from 'pages/CRUD/Bw_introducers/table/Bw_introducersTablePage';
import Bw_introducersViewPage from 'pages/CRUD/Bw_introducers/page/Bw_introducersViewPage';

import Bw_letterheadingFormPage from 'pages/CRUD/Bw_letterheading/form/Bw_letterheadingFormPage';
import Bw_letterheadingTablePage from 'pages/CRUD/Bw_letterheading/table/Bw_letterheadingTablePage';
import Bw_letterheadingViewPage from 'pages/CRUD/Bw_letterheading/page/Bw_letterheadingViewPage';

import Bw_officesFormPage from 'pages/CRUD/Bw_offices/form/Bw_officesFormPage';
import Bw_officesTablePage from 'pages/CRUD/Bw_offices/table/Bw_officesTablePage';
import Bw_officesViewPage from 'pages/CRUD/Bw_offices/page/Bw_officesViewPage';

import Bw_progressFormPage from 'pages/CRUD/Bw_progress/form/Bw_progressFormPage';
import Bw_progressTablePage from 'pages/CRUD/Bw_progress/table/Bw_progressTablePage';
import Bw_progressViewPage from 'pages/CRUD/Bw_progress/page/Bw_progressViewPage';

import Bw_refnofilesseqFormPage from 'pages/CRUD/Bw_refnofilesseq/form/Bw_refnofilesseqFormPage';
import Bw_refnofilesseqTablePage from 'pages/CRUD/Bw_refnofilesseq/table/Bw_refnofilesseqTablePage';
import Bw_refnofilesseqViewPage from 'pages/CRUD/Bw_refnofilesseq/page/Bw_refnofilesseqViewPage';

import Bw_rolesFormPage from 'pages/CRUD/Bw_roles/form/Bw_rolesFormPage';
import Bw_rolesTablePage from 'pages/CRUD/Bw_roles/table/Bw_rolesTablePage';
import Bw_rolesViewPage from 'pages/CRUD/Bw_roles/page/Bw_rolesViewPage';

import Bw_staffsFormPage from 'pages/CRUD/Bw_staffs/form/Bw_staffsFormPage';
import Bw_staffsTablePage from 'pages/CRUD/Bw_staffs/table/Bw_staffsTablePage';
import Bw_staffsViewPage from 'pages/CRUD/Bw_staffs/page/Bw_staffsViewPage';

import Bw_supervisorsFormPage from 'pages/CRUD/Bw_supervisors/form/Bw_supervisorsFormPage';
import Bw_supervisorsTablePage from 'pages/CRUD/Bw_supervisors/table/Bw_supervisorsTablePage';
import Bw_supervisorsViewPage from 'pages/CRUD/Bw_supervisors/page/Bw_supervisorsViewPage';

import Bw_usersrolesFormPage from 'pages/CRUD/Bw_usersroles/form/Bw_usersrolesFormPage';
import Bw_usersrolesTablePage from 'pages/CRUD/Bw_usersroles/table/Bw_usersrolesTablePage';
import Bw_usersrolesViewPage from 'pages/CRUD/Bw_usersroles/page/Bw_usersrolesViewPage';

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

                    <Route path={"/admin/bw_caseheader"} exact component={Bw_caseheaderTablePage} />
                    <Route path={"/admin/bw_caseheader/new"} exact component={Bw_caseheaderFormPage} />
                    <Route path={"/admin/bw_caseheader/:id/edit"} exact component={Bw_caseheaderFormPage} />
                    <Route path={"/admin/bw_caseheader/:id"} exact component={Bw_caseheaderViewPage} />

                    <Route path={"/admin/bw_handlers"} exact component={Bw_handlersTablePage} />
                    <Route path={"/admin/bw_handlers/new"} exact component={Bw_handlersFormPage} />
                    <Route path={"/admin/bw_handlers/:id/edit"} exact component={Bw_handlersFormPage} />
                    <Route path={"/admin/bw_handlers/:id"} exact component={Bw_handlersViewPage} />

                    <Route path={"/admin/bw_introducers"} exact component={Bw_introducersTablePage} />
                    <Route path={"/admin/bw_introducers/new"} exact component={Bw_introducersFormPage} />
                    <Route path={"/admin/bw_introducers/:id/edit"} exact component={Bw_introducersFormPage} />
                    <Route path={"/admin/bw_introducers/:id"} exact component={Bw_introducersViewPage} />

                    <Route path={"/admin/bw_letterheading"} exact component={Bw_letterheadingTablePage} />
                    <Route path={"/admin/bw_letterheading/new"} exact component={Bw_letterheadingFormPage} />
                    <Route path={"/admin/bw_letterheading/:id/edit"} exact component={Bw_letterheadingFormPage} />
                    <Route path={"/admin/bw_letterheading/:id"} exact component={Bw_letterheadingViewPage} />

                    <Route path={"/admin/bw_offices"} exact component={Bw_officesTablePage} />
                    <Route path={"/admin/bw_offices/new"} exact component={Bw_officesFormPage} />
                    <Route path={"/admin/bw_offices/:id/edit"} exact component={Bw_officesFormPage} />
                    <Route path={"/admin/bw_offices/:id"} exact component={Bw_officesViewPage} />

                    <Route path={"/admin/bw_progress"} exact component={Bw_progressTablePage} />
                    <Route path={"/admin/bw_progress/new"} exact component={Bw_progressFormPage} />
                    <Route path={"/admin/bw_progress/:id/edit"} exact component={Bw_progressFormPage} />
                    <Route path={"/admin/bw_progress/:id"} exact component={Bw_progressViewPage} />

                    <Route path={"/admin/bw_refnofilesseq"} exact component={Bw_refnofilesseqTablePage} />
                    <Route path={"/admin/bw_refnofilesseq/new"} exact component={Bw_refnofilesseqFormPage} />
                    <Route path={"/admin/bw_refnofilesseq/:id/edit"} exact component={Bw_refnofilesseqFormPage} />
                    <Route path={"/admin/bw_refnofilesseq/:id"} exact component={Bw_refnofilesseqViewPage} />

                    <Route path={"/admin/bw_roles"} exact component={Bw_rolesTablePage} />
                    <Route path={"/admin/bw_roles/new"} exact component={Bw_rolesFormPage} />
                    <Route path={"/admin/bw_roles/:id/edit"} exact component={Bw_rolesFormPage} />
                    <Route path={"/admin/bw_roles/:id"} exact component={Bw_rolesViewPage} />

                    <Route path={"/admin/bw_staffs"} exact component={Bw_staffsTablePage} />
                    <Route path={"/admin/bw_staffs/new"} exact component={Bw_staffsFormPage} />
                    <Route path={"/admin/bw_staffs/:id/edit"} exact component={Bw_staffsFormPage} />
                    <Route path={"/admin/bw_staffs/:id"} exact component={Bw_staffsViewPage} />

                    <Route path={"/admin/bw_supervisors"} exact component={Bw_supervisorsTablePage} />
                    <Route path={"/admin/bw_supervisors/new"} exact component={Bw_supervisorsFormPage} />
                    <Route path={"/admin/bw_supervisors/:id/edit"} exact component={Bw_supervisorsFormPage} />
                    <Route path={"/admin/bw_supervisors/:id"} exact component={Bw_supervisorsViewPage} />

                    <Route path={"/admin/bw_usersroles"} exact component={Bw_usersrolesTablePage} />
                    <Route path={"/admin/bw_usersroles/new"} exact component={Bw_usersrolesFormPage} />
                    <Route path={"/admin/bw_usersroles/:id/edit"} exact component={Bw_usersrolesFormPage} />
                    <Route path={"/admin/bw_usersroles/:id"} exact component={Bw_usersrolesViewPage} />

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
