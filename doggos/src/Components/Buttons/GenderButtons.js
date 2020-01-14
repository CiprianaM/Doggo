import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { red, indigo } from "@material-ui/core/colors";

import "./GenderButtons.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    justifyContent: "center",
    alignContent: "center",
    margin: 0
  },
  label: {
    margin: 0
  }
}));

const GirlRadio = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const BoyRadio = withStyles({
  root: {
    color: indigo[400],
    "&$checked": {
      color: indigo[600]
    }
  },

  checked: {}
})(props => <Radio color="default" {...props} />);

export default function RadioButtonsGroup({ getGender }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const handleChange = event => {
    getGender(event);
    setValue(event.target.value);
  };

  return (
    <div className="gender-buttons-arrangement">
      <FormControl
        component="fieldset"
        className={classes.formControl}
        row="true"
      >
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            classes={{ root: classes.label }}
            value="female"
            control={<GirlRadio />}
            label="Girl"
          />
          <FormControlLabel
            classes={{ root: classes.label }}
            value="male"
            control={<BoyRadio />}
            label="Boy"
          />
        </RadioGroup>
      </FormControl>
      <FormControl
        component="fieldset"
        className={classes.formControl}
      ></FormControl>
    </div>
  );
}
