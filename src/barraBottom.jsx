import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

import HomeIcon from '@material-ui/icons/Home';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const useStyles = makeStyles({
  root: {
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "6px"
  },
});

export default function BottomNav() {
  const classes = useStyles();
  

  return (
      <div className={classes.root}>
    <IconButton color="primary" aria-label="Home"><HomeIcon /></IconButton>
    <IconButton color="primary" aria-label="Guardar"><SaveAltIcon /></IconButton>
    <IconButton color="primary" aria-label="Usuario"><PermIdentityOutlinedIcon /></IconButton>

    
    
    
   
    </div>
   );
}