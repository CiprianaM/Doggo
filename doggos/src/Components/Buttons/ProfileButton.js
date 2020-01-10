import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function ProfileButton() {
  const classes = useStyles();

  return (
    <IconButton display="flex" aria-label="person" className={classes.margin}>
      <PersonIcon fontSize="large" />
    </IconButton>
  );
}
