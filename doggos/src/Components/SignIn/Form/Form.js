import React, { useState } from "react";

function Form({ redirected }) {
  const defaultState = {
    username: "",
    password: ""
  };
  const [state, setState] = useState(defaultState);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={redirected} className="sign-in-form">
      <div className="form-fields">
        <input
          className="username-input"
          placeholder="Username"
          type="text"
          name="username"
          autoComplete="off"
          value={state.username}
          onChange={handleChange}
        />

        <input
          className="password-input"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="off"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-fields">
        <input
          type="submit"
          value="LOGIN"
          onSubmit={redirected}
          className="sign-in-button"
        />
      </div>
    </form>
  );
}
export default Form;
