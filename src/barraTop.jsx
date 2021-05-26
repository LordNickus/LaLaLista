import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#5754f3",
    display: "flex",
    justifyContent: "space-around",
    paddingTop: "6px"
  },
});

export default function TopNav() {
  const classes = useStyles();
    return (
    <div className={classes.root}>
      <img src='./logo512.png'alt='logo1' width='90px'height='90px'/>
          <h3>No duermo en casa</h3>
     </div>
   );
}