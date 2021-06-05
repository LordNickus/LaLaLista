import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList2() {
  const classes = useStyles();
  const [items, setItems] = React.useState( [
    {cheked: false, id: 1,name:'Barbijo'},
    {cheked: false, id: 2,name:'Pantalon'},
    {cheked: false, id: 3,name:'Zapatos'},
    {cheked: false, id: 4,name:'Remera'},
    {cheked: false, id: 5,name:'Camiseta'},
    {cheked: false, id: 6,name:'Buzo'},
    {cheked: false, id: 7,name:'Fichero'},
    {cheked: false, id: 8,name:'Sube'},
    {cheked: false, id: 9,name:'Anteojos'},
    {cheked: false, id: 10,name:'Tupper'},
    {cheked: false, id: 11,name:'Cubiertos'},
    {cheked: false, id: 12,name:'Cargador'},
    {cheked: false, id: 13,name:'Billetera'},
    {cheked: false, id: 14,name:'Fruta x 2'},
    
 ]);
 const [styles, setStyles] = React.useState( {
  backgroundColor: '#F1948A',
 }

 )

  const handleToggle = (value) => {
      console.log (value)
      var chequeado = items.map(function (dato){
        if (dato.id == value.id){
        if (dato.cheked == true){
          dato.cheked = false
        }
        else {
          dato.cheked = true
        }}
        return dato

      })
      setItems (chequeado) 
      var totalch = totalCheked (chequeado)
        if(totalch){
          setStyles({
            backgroundColor: '#91ec96',
          })
        }

      }
     const totalCheked = (items) => {
      return items.filter(item => item.cheked == true).length == items.length
      
     } 
      


    
  return (
    <List className={classes.root} style={styles}>
      {items.map((value) => {
        const labelId = items;

        return (
          <ListItem key={value.id} dense button onClick={()=>handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.cheked}
                tabIndex={-1}
                disableRipple
                // inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
           <ListItemText id={labelId} primary={value.name} />
           <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}





