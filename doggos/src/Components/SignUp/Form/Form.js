import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function Form({ addEvent }) {
  const classes = useStyles();

  const defaultState = {
    username: "",
    password: "",
    passConf: "",
    description: ""
  };
  const [state, setState] = useState(defaultState);

  const handleSubmit = e => {
    e.preventDefault();
    addEvent(state);
    setState(defaultState);
  };

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <div className="form-fields">
        <input
          className="username-input"
          placeholder="Please choose a username"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Please choose a username")}
          type="text"
          name="username"
          autoComplete="off"
          value={state.username}
          onChange={handleChange}
        />

        <input
          className="password-input"
          placeholder="Your password goes here"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Your password goes here")}
          type="password"
          name="password"
          autoComplete="off"
          value={state.password}
          onChange={handleChange}
        />
        <input
          className="password-input"
          placeholder="Please confirm your password"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Please confirm your password")}
          type="password"
          name="passConf"
          autoComplete="off"
          value={state.passConf}
          onChange={handleChange}
        />
        <input
          className="username-input"
          placeholder="Short description"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Short description")}
          type="text"
          name="description"
          autoComplete="off"
          value={state.description}
          onChange={handleChange}
        />

      </div>
      <div className="form-fields">
        <input
          type="submit"
          value="REGISTER"
          
          className="sign-up-button"
        />
      </div>

    </form>
  );
}
export default Form;
