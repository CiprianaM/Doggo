import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  },

}));

function UploadButton () {
  const classes = useStyles();

return (
<div className={classes.root} >
            <input
              accept="image/*"
              className={classes.input}className="flex"
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file" className="upload-label">
              <Button variant="contained" color="primary" component="span" className="upload-button">
                MY Picture
              </Button>
            </label>
          </div>
)
}

export default UploadButton;