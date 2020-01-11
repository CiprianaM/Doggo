import React from "react";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <IconButton
      display="flex"
      aria-label="chatbubblerounded"
      className={classes.margin}
    >
      <ChatBubbleRoundedIcon fontSize="large"/>
    </IconButton>
  );
}
