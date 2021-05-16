import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  NotesIcon,
  ReminderIcon,
  EditLabelsIcon,
  ArchivesIcon,
  BinIcon,
} from '../../../customComponents/Icons';
import './index.scss';

const ListItemComponent = (props) => {
  const history = useHistory();
  return (<ListItem className="list-item" button onClick={() => history.push(`/keep/${props.route}`)}>
    <ListItemIcon>
      {props.children}
    </ListItemIcon>
    <ListItemText primary={<Typography variant='body'>{props.item}</Typography>} />
  </ListItem>)
}

const LeftNavComponent = (props) => {
  return (<List
    component="nav"
  >
    <ListItemComponent item="Notes" route="home">
      <NotesIcon />
    </ListItemComponent>
    <ListItemComponent item="Reminders" route="reminders">
      <ReminderIcon />
    </ListItemComponent>
    <ListItemComponent item="Edit Labels" route="editlabels">
      <EditLabelsIcon />
    </ListItemComponent>
    <ListItemComponent item="Archives" route="archives">
      <ArchivesIcon />
    </ListItemComponent>
    <ListItemComponent item="Bin" route="bin">
      <BinIcon />
    </ListItemComponent>
  </List>);
}

export default LeftNavComponent;
