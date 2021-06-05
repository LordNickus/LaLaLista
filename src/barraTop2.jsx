import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#16A085",
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "6px"
  },
});

export default function TopNav2() {
  const classes = useStyles();
    return (
    <div className={classes.root}>
      <img src='./logo512.png'alt='logo1' width='90px'height='90px'/>
      <h3>Super</h3>
     </div>
   );
}