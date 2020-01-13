import React, { useState } from "react";
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
  }
}));

function UploadButton({getImage}) {
  const classes = useStyles();
//   const [photo, setPhoto] = useState("");


//   const addImage = e => {
//     I am leaving the console.logs here for future implementation of picture upload
//     console.log(e);
//     console.log(e.target.files);
//     console.log(e.target.files);
// setPhoto('https://images.dog.ceo/breeds/deerhound-scottish/n02092002_4131.jpg');

//   };

  return (
    <div className={classes.root}>
      <input
        // ref={(ref) => setPhoto(ref)}
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
