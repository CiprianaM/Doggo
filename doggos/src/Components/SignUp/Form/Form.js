import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function Form({ addPupper, directProfSubmit }) {
  const defaultState = {
    username: "",
    email: "",
    password: "",
    confirmPass: "",
    description: ""
  };
  const [state, setState] = useState(defaultState);

  const handleSubmit = e => {
    e.preventDefault();
    addPupper(state);
    setState(defaultState);
    // directProfSubmit() //this needs to be async to make sure first I save the data
  };

  const handleChange = e => {
    // e.preventDefault();
    // addPupper(state);
    // setState(defaultState);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
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
          name="confirmPass"
          autoComplete="off"
          value={state.confirmPass}
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
