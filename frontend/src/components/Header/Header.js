import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Fab,
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
} from '@material-ui/icons';
import classNames from 'classnames';

//images
import profile from '../../images/main-profile.png';
import config from '../../config';

// styles
import useStyles from './styles';

// components
import { Badge, Typography, Avatar } from '../Wrappers/Wrappers';
import Notification from '../Notification/Notification';
import UserAvatar from '../UserAvatar/UserAvatar';

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from '../../context/LayoutContext';
import {
  useManagementDispatch,
  useManagementState,
} from '../../context/ManagementContext';

import { actions } from '../../context/ManagementContext';
import { useUserDispatch, signOut } from '../../context/UserContext';

const messages = [
  {
    id: 0,
    variant: 'warning',
    name: 'Jane Hew',
    message: 'Hey! How is it going?',
    time: '9:32',
  },
  {
    id: 1,
    variant: 'success',
    name: 'Lloyd Brown',
    message: 'Check out my new Dashboard',
    time: '9:18',
  },
  {
    id: 2,
    variant: 'primary',
    name: 'Mark Winstein',
    message: 'I want rearrange the appointment',
    time: '9:15',
  },
  {
    id: 3,
    variant: 'secondary',
    name: 'Liana Dutti',
    message: 'Good news from sale department',
    time: '9:09',
  },
];

const notifications = [
  { id: 0, color: 'warning', message: 'Check out this awesome ticket' },
  {
    id: 1,
    color: 'success',
    type: 'info',
    message: 'What is the best way to get ...',
  },
  {
    id: 2,
    color: 'secondary',
    type: 'notification',
    message: 'This is just a simple notification',
  },
  {
    id: 3,
    color: 'primary',
    type: 'e-commerce',
    message: '12 new orders has arrived today',
  },
];

export default function Header(props) {
  let classes = useStyles();
  let theme = useTheme();

  // global
  let layoutState = useLayoutState();
  let layoutDispatch = useLayoutDispatch();
  let userDispatch = useUserDispatch();
  const managementDispatch = useManagementDispatch();

  // local
  let [mailMenu, setMailMenu] = useState(null);
  let [isMailsUnread, setIsMailsUnread] = useState(true);
  let [notificationsMenu, setNotificationsMenu] = useState(null);
  let [isNotificationsUnread, setIsNotificationsUnread] = useState(true);
  let [profileMenu, setProfileMenu] = useState(null);
  let [isSearchOpen, setSearchOpen] = useState(false);
  const [isSmall, setSmall] = useState(false);

  const managementValue = useManagementState();

  useEffect(() => {
    actions.doFind(sessionStorage.getItem('user_id'))(managementDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(function () {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  function handleWindowWidthChange() {
    let windowWidth = window.innerWidth;
    let breakpointWidth = theme.breakpoints.values.md;
    let isSmallScreen = windowWidth < breakpointWidth;
    setSmall(isSmallScreen);
  }

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color='inherit'
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse,
          )}
        >
          {(!layoutState.isSidebarOpened && isSmall) ||
          (layoutState.isSidebarOpened && !isSmall) ? (
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant='h6' weight='medium' className={classes.logotype}>
          Brain World Lawyer Program New
        </Typography>
        <div className={classes.grow} />
        <div
          className={classNames(classes.search, {
            [classes.searchFocused]: isSearchOpen,
          })}
        >
          <div
            className={classNames(classes.searchIcon, {
              [classes.searchIconOpened]: isSearchOpen,
            })}
            onClick={() => setSearchOpen(!isSearchOpen)}
          >
            <SearchIcon classes={{ root: classes.headerIcon }} />
          </div>
          <InputBase
            placeholder='Search...'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <IconButton
          color='inherit'
          aria-haspopup='true'
          aria-controls='mail-menu'
          onClick={(e) => {
            setNotificationsMenu(e.currentTarget);
            setIsNotificationsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge
            badgeContent={isNotificationsUnread ? notifications.length : null}
            color='warning'
          >
            <NotificationsIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          color='inherit'
          aria-haspopup='true'
          aria-controls='mail-menu'
          onClick={(e) => {
            setMailMenu(e.currentTarget);
            setIsMailsUnread(false);
          }}
          className={classes.headerMenuButton}
        >
          <Badge
            badgeContent={isMailsUnread ? messages.length : null}
            color='secondary'
          >
            <MailIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup='true'
          color='inherit'
          className={classes.headerMenuButton}
          aria-controls='profile-menu'
          onClick={(e) => setProfileMenu(e.currentTarget)}
        >
          <Avatar
            alt={
              config.isBackend
                ? managementValue.currentUser?.firstName
                : 'Admin'
            }
            // eslint-disable-next-line no-mixed-operators
            src={
              config.isBackend
                ? (managementValue.currentUser &&
                    managementValue.currentUser.avatar.length >= 1 &&
                    managementValue.currentUser.avatar[
                      managementValue.currentUser.avatar.length - 1
                    ].publicUrl) ||
                  profile
                : profile
            }
            classes={{ root: classes.headerIcon }}
          />
        </IconButton>
        <Typography
          block
          variant='body2'
          style={{ display: 'flex', alignItems: 'center', marginLeft: 8 }}
        >
          <div className={classes.profileLabel}>Hi,&nbsp;</div>
          <Typography
            variant='body2'
            weight={'bold'}
            className={classes.profileLabel}
          >
            {config.isBackend
              ? managementValue.currentUser?.firstName
              : 'Admin'}
          </Typography>
        </Typography>
        <Menu
          id='mail-menu'
          open={Boolean(mailMenu)}
          anchorEl={mailMenu}
          onClose={() => setMailMenu(null)}
          MenuListProps={{ className: classes.headerMenuList }}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant='h4' weight='medium'>
              New Messages
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component='a'
              color='secondary'
            >
              {messages.length} New Messages
            </Typography>
          </div>
          {messages.map((message) => (
            <MenuItem key={message.id} className={classes.messageNotification}>
              <div className={classes.messageNotificationSide}>
                <UserAvatar color={message.variant} name={message.name} />
                <Typography size='sm' color='text' colorBrightness='secondary'>
                  {message.time}
                </Typography>
              </div>
              <div
                className={classNames(
                  classes.messageNotificationSide,
                  classes.messageNotificationBodySide,
                )}
              >
                <Typography weight='medium' gutterBottom>
                  {message.name}
                </Typography>
                <Typography color='text' colorBrightness='secondary'>
                  {message.message}
                </Typography>
              </div>
            </MenuItem>
          ))}
          <Fab
            variant='extended'
            color='primary'
            aria-label='Add'
            className={classes.sendMessageButton}
          >
            Send New Message
            <SendIcon className={classes.sendButtonIcon} />
          </Fab>
        </Menu>
        <Menu
          id='notifications-menu'
          open={Boolean(notificationsMenu)}
          anchorEl={notificationsMenu}
          onClose={() => setNotificationsMenu(null)}
          className={classes.headerMenu}
          disableAutoFocusItem
        >
          {notifications.map((notification) => (
            <MenuItem
              key={notification.id}
              onClick={() => setNotificationsMenu(null)}
              className={classes.headerMenuItem}
            >
              <Notification {...notification} typographyVariant='inherit' />
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id='profile-menu'
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant='h4' weight='medium'>
              {config.isBackend
                ? managementValue.currentUser?.firstName
                : 'Admin'}
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component='a'
              color='primary'
              href='https://flatlogic.com'
            >
              Flatlogic.com
            </Typography>
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <Link to='/admin/user/edit'>
              <AccountIcon className={classes.profileMenuIcon} /> Profile
            </Link>
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Tasks
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Messages
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color='primary'
              onClick={() => signOut(userDispatch, props.history)}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
