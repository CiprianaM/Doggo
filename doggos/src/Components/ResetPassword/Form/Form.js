import React, { useState } from "react";

function Form({addEvent}) {

  const defaultState = {
    username: "",
    password: "",
    confirmPass: ""
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
    <form onSubmit={handleSubmit} className="resetpass-form">
        <div className="form-fields">

        <input className="username-input"
          placeholder="Username"
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "Username"}
          type="text"
          name="username"
          autoComplete="off"
          value={state.username}
          onChange={handleChange}
          />


        <input className="password-input"
          placeholder="New password"
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "New password"}
          type="password"
          name="password"
          autoComplete="off"
          value={state.password}
          onChange={handleChange}
          />
        <input className="password-input"
          placeholder="Confirm password"
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "Confirm password"}
          type="password"
          name="confirmPass"
          autoComplete="off"
          value={state.confirmPass}
          onChange={handleChange}
          />
          </div>
          <div className="form-fields">
      <input type="submit" value="SUBMIT"  className="resetpass-button"/>
      </div>
    </form>
  );
}
export default Form;