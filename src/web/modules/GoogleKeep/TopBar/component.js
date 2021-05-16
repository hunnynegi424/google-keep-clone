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
      <ButtonIcons title="Main menu" ariaLabel="open drawer" icon={<MenuIcon />} className="drawer-button"/>
      <img src={logo} alt="logo" width={40}/>
      <Typography variant='h6' className="app-name">Keep</Typography>
      <Grid
        container
        xs={12}
        spacing={0}
        alignItems="center"
        className=""
      >
        <Grid
          item
          xs={0} sm={4} md={6} lg={7}
        >
          <span className="search-container">
            <CustomSearchInput />
          </span>
        </Grid>
        <Grid
          item
          xs={12} sm={8} md={6} lg={5}
        >
          <Grid
            container
            justify="flex-end"
            className="options-account-wrap"
          >
            <Grid className="options-container">
              <ButtonIcons title="refresh" ariaLabel="refresh" icon={<RefreshIcon />}/>
              <ButtonIcons title="view" ariaLabel="refresh" icon={<ViewStreamOutlinedIcon />}/>
              <ButtonIcons title="settings" ariaLabel="refresh" icon={<SettingsOutlinedIcon />}/>
            </Grid>
            <Grid className="account-container">
              <ButtonIcons title="Google Apps" ariaLabel="apps" icon={<AppsOutlinedIcon />}/>
              <ButtonIcons title="Google Account" ariaLabel="account" icon={<AccountCircleOutlinedIcon />}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>);
}

export default TopBarComponent;
