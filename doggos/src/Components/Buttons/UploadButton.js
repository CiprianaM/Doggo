import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      minWidth: 0,
      width: "80%"
    },
    display: "flex",
    padding: 0,
    justifyContent: "center",
    minWidth: 0
  },
  input: {
    display: "none"
  },
  button: {
    root: {
      minWidth: 0
    }
  }
}));

function UploadButton({ getImage }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        onChange={getImage}
        accept="image/*"
        className={classes.input}
        className="flex"
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file" className="upload-label">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className="upload-button"
        >
          MY Picture
        </Button>
      </label>
    </div>
  );
}

export default UploadButton;
