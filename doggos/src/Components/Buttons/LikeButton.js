import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function LikeButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab color="secondary" aria-label="like" onClick={props.passedFunc2}>
        <FavoriteIcon />
      </Fab>
    </div>
  );
}
