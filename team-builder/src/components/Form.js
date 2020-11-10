import React from "react";
import styled from 'styled-components';

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
    <FormStyles>
      <h2>Add A <br/>New Member</h2>
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
              <option value="Full Stack Developer">Full Stack Developer</ option>
              <option value="TeamLead">Team Lead</option>
          </select>
        </label>

        <div className="submitButton">
          <button>Submit New Member!</button>
        </div>

      </form>
    </FormStyles>
  )
}

const FormStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid grey; */

  h2{
    margin-top: 20px;
    text-align: center;
  }

  form{
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  form label{
    margin: 5px;
    font-size: 1.2rem;
    text-align: center;

  }
  form div{
    margin: 5px;
  }

  button{
    margin-top: 10px;
    width: 200px;
    padding: 5px;
    background-color: cyan;
    color: grey;
  }

`;
