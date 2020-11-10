import React from "react";

export default function Form(props){
  const { formValues, updateForm, submitButton } = props;

  const onChange = (evt) => {
    const {name, value} = evt.target;
    updateForm(name, value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    submitButton();
  }

  return (
    <form className="form container" onSubmit={onSubmit} >

      <label> Name:
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={onChange}
          placeholder="Enter Name"
        ></input>
      </label>

      <label> Email:
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={onChange}
          placeholder="Enter Email"
        ></input>
      </label>

      <label> Role:
        <select
          name="role"
          value={formValues.role}
          onChange={onChange}
        >
            <option value="">---Select a Role---</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Designer">Designer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="TeamLead">Team Lead</option>
        </select>
      </label>

      <div className="submitButton">
        <button>Submit New Member!</button>
      </div>

    </form>
  )
}