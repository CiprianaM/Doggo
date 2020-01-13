import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import { green, red, blue } from '@material-ui/core/colors';

import './GenderButtons.css';


const useStyles = makeStyles(theme => ({
  formControl: {
    // margin: theme.spacing(3),
    justifyContent: "center",
    alignContent: "center",
    margin: 0
  },
  label:{
    margin: 0,
  }

}));

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },

  checked: {},
})(props => <Radio color="default" {...props} />);

export default function RadioButtonsGroup({getGender}) {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    getGender(event);
    setValue(event.target.value);
    
  };


  return (
    <div className="gender-buttons-arrangement">
      <FormControl component="fieldset" className={classes.formControl} row="true">
        <FormLabel component="legend" >Your dog is a </FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange} row>
          <FormControlLabel classes={{root:classes.label}}  value="female" control={<GreenRadio />} label="Female"/>
          <FormControlLabel classes={{root:classes.label}} value="male" control={<Radio />} label="Male"/>


        </RadioGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>



      </FormControl>
    </div>
  );
}
