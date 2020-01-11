import React, { useState } from "react";

function Form({addEvent}) {

  const defaultState = {
    username: "",
    password: "",
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
    <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="form-fields">

        <input className="username-input"
          placeholder="Username"
          type="text"
          name="username"
          autoComplete="off"
          value={state.username}
          onChange={handleChange}
          />


        <input className="password-input"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="off"
          value={state.password}
          onChange={handleChange}
          />
          </div>
          <div className="form-fields">
      <input type="submit" value="LOGIN"  className="sign-in-button"/>
      </div>
    </form>
  );
}
export default Form;