import React from "react";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
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
      aria-label="chatbubble"
      className={classes.margin}
    >
      <ChatBubbleIcon fontSize="large" />
    </IconButton>
  );
}
