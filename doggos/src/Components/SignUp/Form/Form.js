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

function Form({ addEvent, directProfSubmit }) {
  const classes = useStyles();
  console.log(directProfSubmit)

  const defaultState = {
    username: "",
    email: "",
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
    <form  className="sign-up-form" onSubmit={directProfSubmit}>
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
          className="username-input"
          placeholder="Your email goes here"
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "Your email goes here")}
          type="text"
          name="email"
          autoComplete="off"
          value={state.email}
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

        <input
          type="submit"
          value="REGISTER"
          onSubmit={directProfSubmit}
          className="sign-up-button"
        />
      </div>


    </form>
  );
}
export default Form;
