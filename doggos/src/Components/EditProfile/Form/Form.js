import React, { useState } from "react";

function Form({  redirStaticProfile }) {

  const defaultState = {
    username: "",
    email: "",
    password: "",
    confirmpass: "",
    description: ""
  };
  const [state, setState] = useState(defaultState);

  const handleSubmit = e => {
    e.preventDefault();
    // addEvent(state);
    setState(defaultState);
  };

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="profile-form" onSubmit={redirStaticProfile}>
      <div></div>
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
          value="SAVE CHANGES"
          onClick={redirStaticProfile}
          className="sign-up-button"
        />
      </div>
    </form>
  );
}
export default Form;
