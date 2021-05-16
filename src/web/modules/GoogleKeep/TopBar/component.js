import React from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Refresh as RefreshIcon,
  ViewStreamOutlined as ViewStreamOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  AppsOutlined as AppsOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
} from '@material-ui/icons';
import { CustomSearchInput } from '../../../customComponents/Inputs';
import { ButtonIcons } from '../../../customComponents/Icons';
import logo from '../../../common/images/keep_2020q4_48dp.png';
import './component.scss';

const TopBarComponent = () => {
  return (<AppBar position="static">
    <Toolbar className="toolbar">
      <div className="menu-button-bar">
        <ButtonIcons title="Main menu" ariaLabel="open drawer" icon={<MenuIcon />} className="drawer-button"/>
        <img src={logo} alt="logo" width={40}/>
        <Typography variant='h6' className="app-name">Keep</Typography>
      </div>
      <Grid
        container
        xs={12}
        justify="flex-start"
        alignItems="center"
        className="search-container"
      >
        <span className="search">
          <CustomSearchInput />
        </span>
      </Grid>
      <div className="option-account-bar">
          <ButtonIcons title="Refresh" ariaLabel="refresh" icon={<RefreshIcon />} className="refresh-icon"/>
          <ButtonIcons title="View" ariaLabel="view" icon={<ViewStreamOutlinedIcon />} className="view-icon"/>
          <ButtonIcons title="Settings" ariaLabel="settings" icon={<SettingsOutlinedIcon />} className="settings-icon"/>
          <ButtonIcons title="Google Apps" ariaLabel="apps" icon={<AppsOutlinedIcon />} className="apps-icon"/>
          <ButtonIcons title="Google Account" ariaLabel="account" icon={<AccountCircleOutlinedIcon />} className="account-icon"/>
      </div>
    </Toolbar>
  </AppBar>);
}

export default TopBarComponent;
