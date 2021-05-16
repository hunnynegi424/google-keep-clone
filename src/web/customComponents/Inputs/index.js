import React, { useEffect, useRef, useState } from 'react';
import { Close as CloseIcon, Search as SearchIcon } from '@material-ui/icons';
import { IconButton, Tooltip } from '@material-ui/core';

const useStyles = (focused) => ({
  searchContainer: {
    boxSizing: 'borderBox',
    borderRadius: '8px',
    border: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft: '5em',
    marginRight: '5em',
    backgroundColor: focused ? 'white' : '#525355',
  },
  sIcon: {
    fill: focused ? '#525355' : 'white',
  },
  input: {
    outline: 'none',
    width: '100%',
    height: '100%',
    border: '0px',
    fontSize: '16px',
    backgroundColor: focused ? 'white' : '#525355',
    color: focused ? '#525355' : 'white',
  }
})

export const CustomSearchInput = () => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const classes = useStyles(focused);

  useEffect(() => {
    focused && inputRef.current.focus();
  }, [focused])

  return <div style={classes.searchContainer} onClick={() => setFocused(true)} >
    <IconButton>
      <Tooltip title="Search">
        <SearchIcon style={classes.sIcon} />
      </Tooltip>
    </IconButton>
    <input ref={inputRef} style={classes.input} placeholder='Search' onBlur={() => setFocused(false)}/>
    <IconButton>
      <Tooltip title="Clear Search">
        <CloseIcon style={classes.sIcon}/>
      </Tooltip>
    </IconButton>
  </div>
}
