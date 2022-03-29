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

import CaseserialFormPage from 'pages/CRUD/Caseserial/form/CaseserialFormPage';
import CaseserialTablePage from 'pages/CRUD/Caseserial/table/CaseserialTablePage';
import CaseserialViewPage from 'pages/CRUD/Caseserial/page/CaseserialViewPage';

import CasestatusFormPage from 'pages/CRUD/Casestatus/form/CasestatusFormPage';
import CasestatusTablePage from 'pages/CRUD/Casestatus/table/CasestatusTablePage';
import CasestatusViewPage from 'pages/CRUD/Casestatus/page/CasestatusViewPage';

import CasetypesFormPage from 'pages/CRUD/Casetypes/form/CasetypesFormPage';
import CasetypesTablePage from 'pages/CRUD/Casetypes/table/CasetypesTablePage';
import CasetypesViewPage from 'pages/CRUD/Casetypes/page/CasetypesViewPage';

import CategoryFormPage from 'pages/CRUD/Category/form/CategoryFormPage';
import CategoryTablePage from 'pages/CRUD/Category/table/CategoryTablePage';
import CategoryViewPage from 'pages/CRUD/Category/page/CategoryViewPage';

import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';
import UsersViewPage from 'pages/CRUD/Users/page/UsersViewPage';

import CaseheaderreferencesFormPage from 'pages/CRUD/Caseheaderreferences/form/CaseheaderreferencesFormPage';
import CaseheaderreferencesTablePage from 'pages/CRUD/Caseheaderreferences/table/CaseheaderreferencesTablePage';
import CaseheaderreferencesViewPage from 'pages/CRUD/Caseheaderreferences/page/CaseheaderreferencesViewPage';

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

                    <Route path={"/admin/caseserial"} exact component={CaseserialTablePage} />
                    <Route path={"/admin/caseserial/new"} exact component={CaseserialFormPage} />
                    <Route path={"/admin/caseserial/:id/edit"} exact component={CaseserialFormPage} />
                    <Route path={"/admin/caseserial/:id"} exact component={CaseserialViewPage} />

                    <Route path={"/admin/casestatus"} exact component={CasestatusTablePage} />
                    <Route path={"/admin/casestatus/new"} exact component={CasestatusFormPage} />
                    <Route path={"/admin/casestatus/:id/edit"} exact component={CasestatusFormPage} />
                    <Route path={"/admin/casestatus/:id"} exact component={CasestatusViewPage} />

                    <Route path={"/admin/casetypes"} exact component={CasetypesTablePage} />
                    <Route path={"/admin/casetypes/new"} exact component={CasetypesFormPage} />
                    <Route path={"/admin/casetypes/:id/edit"} exact component={CasetypesFormPage} />
                    <Route path={"/admin/casetypes/:id"} exact component={CasetypesViewPage} />

                    <Route path={"/admin/category"} exact component={CategoryTablePage} />
                    <Route path={"/admin/category/new"} exact component={CategoryFormPage} />
                    <Route path={"/admin/category/:id/edit"} exact component={CategoryFormPage} />
                    <Route path={"/admin/category/:id"} exact component={CategoryViewPage} />

                    <Route path={"/admin/users"} exact component={UsersTablePage} />
                    <Route path={"/admin/users/new"} exact component={UsersFormPage} />
                    <Route path={"/admin/users/:id/edit"} exact component={UsersFormPage} />
                    <Route path={"/admin/users/:id"} exact component={UsersViewPage} />

                    <Route path={"/admin/caseheaderreferences"} exact component={CaseheaderreferencesTablePage} />
                    <Route path={"/admin/caseheaderreferences/new"} exact component={CaseheaderreferencesFormPage} />
                    <Route path={"/admin/caseheaderreferences/:id/edit"} exact component={CaseheaderreferencesFormPage} />
                    <Route path={"/admin/caseheaderreferences/:id"} exact component={CaseheaderreferencesViewPage} />

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
