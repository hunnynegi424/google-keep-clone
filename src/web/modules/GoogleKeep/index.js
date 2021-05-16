import React, { Suspense, lazy } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {
  KEEP_ROOT_CONTEXT,
  KEEP_HOME_CONTEXT,
  KEEP_REMINDERS_CONTEXT,
  KEEP_EDIT_LABELS_CONTEXT,
  KEEP_ARCHIVES_CONTEXT,
  KEEP_BIN_CONTEXT,  
} from '../../common';
import './index.scss';
import TopBar from './TopBar';
import LeftNav from './LeftNav';
import { Grid } from '@material-ui/core';

const NotesComponentLazy = lazy(() => import(`./Pages/Notes`));
const RemindersComponentLazy = lazy(() => import(`./Pages/Reminders`));
const EditLabelsComponentLazy = lazy(() => import(`./Pages/EditLabels`));
const ArchivesComponentLazy = lazy(() => import(`./Pages/Archives`));
const BinComponentLazy = lazy(() => import(`./Pages/Bin`));

const KeepRoutes = () => {
  return (<div className="app-container">
    <TopBar />
    <Grid container xs={12} style={{ color: 'white' }} spacing={1} >
      <Grid item xs={2}>
        <LeftNav />
      </Grid>
      <Grid item xs={10} className="notes-section">
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <Route
              exact
              path={KEEP_ROOT_CONTEXT}
              render={() => <Redirect to={KEEP_HOME_CONTEXT} />}
            />
            <Route
              exact
              path={KEEP_HOME_CONTEXT}
              component={NotesComponentLazy}
            />
            <Route
              exact
              path={KEEP_REMINDERS_CONTEXT}
              component={RemindersComponentLazy}
            />
            <Route
              exact
              path={KEEP_EDIT_LABELS_CONTEXT}
              component={EditLabelsComponentLazy}
            />
            <Route
              exact
              path={KEEP_ARCHIVES_CONTEXT}
              component={ArchivesComponentLazy}
            />
            <Route
              exact
              path={KEEP_BIN_CONTEXT}
              component={BinComponentLazy}
            />
          </Switch>
        </Suspense>
      </Grid>
    </Grid>
  </div>);
}

export default KeepRoutes;
