import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import {useState} from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function LikeButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <diV>{index}</diV> */}
      <Fab color="secondary" aria-label="like" onClick={props.passedFunc2}>
      <FavoriteIcon />
      </Fab>
    </div>
  );
}