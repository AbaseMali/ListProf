import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Grid, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Profile from '@material-ui/icons/AccountCircleRounded'
const styles = theme => ({
  root: {
    marginTop:"70px",
    backgroundColor: theme.palette.background.paper,
  },
 
});



function SimpleList(props) {
  const { classes } = props;
  return (
      
    
    <div className={classes.root}>
    
      <Divider />
      <Grid
       container
       spacing={16}
       justify="flex-start"
       alignItems="stretch"
       direction="column"
       
       >
       
      <List component="nav">
        <ListItem button>
        <Profile style={{width:"40px" , height:"40px"}} />
          <ListItemText primary="Ahmed Mohamoud"style={{marginLeft:"30px"}} /> 

        <Button style={{marginRight:"20px"}}><DeleteIcon /></Button>  <Button  style={{marginRight:"30px"}}><EditIcon/></Button>  
        </ListItem>
        <Divider />
      </List>
      </Grid>

      <Divider />
      <Grid
       container
       spacing={16}
       justify="flex-start"
       alignItems="stretch"
       direction="column"
       
       >
       
      <List component="nav">
        <ListItem button>
        <Profile style={{width:"40px" , height:"40px"}} />
          <ListItemText primary="Ahmed Mohamoud"style={{marginLeft:"30px"}} /> 

        <Button style={{marginRight:"20px"}}><DeleteIcon /></Button>  <Button  style={{marginRight:"30px"}}><EditIcon/></Button>  
        </ListItem>
        <Divider />
      </List>
      </Grid>
      
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);