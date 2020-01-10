import React, { useState } from "react";

function Form({ addEvent }) {
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
    <form onSubmit={handleSubmit} className="form_align">
      <label>
        TITLE
        <input
          type="text"
          name="title"
          autoComplete="off"
          value={state.title}
          onChange={handleChange}
        />
      </label>
      <label>
        DATE
        <input
          type="datetime-local"
          name="date"
          value={state.date}
          onChange={handleChange}
        />
      </label>
      <label>
        VENUE
        <input
          type="text"
          name="venue"
          autoComplete="off"
          value={state.venue}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Create" className="submit_button" />
    </form>
  );
}
export default Form;
