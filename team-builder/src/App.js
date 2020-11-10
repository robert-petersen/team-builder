import React, {useState} from "react";
import Form from "./components/Form";
import Member from "./components/Member";
import reportWebVitals from "./reportWebVitals";
import styled from 'styled-components';

function App() {
  const emptyForm = {
    name: "",
    email: "",
    role: ""
  };
  const aMember = {
      name: "Robert",
      email: "rob@rob.com",
      role: "Backend Developer"
    };

  const [teamMembers, setTeamMembers] = useState([aMember]);
  console.log(teamMembers);

  const [formValues, setFormValues] = useState(emptyForm);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]:inputValue
    })
  };
  const submitButton = () => {

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }

    // dont except empty values
    if(!newMember.name || !newMember.email || !newMember.role) return;

    setTeamMembers([newMember, ...teamMembers]);
    setFormValues(emptyForm);
  }

  return (
    <div className="App">

      <Form 
        formValues={formValues}
        updateForm={updateForm}
        submitButton={submitButton}
      />

      <div className="membersContainer">
        <h2>Current Members:</h2>
        {
          teamMembers.map((member) => {
            return (
              <Member  key={member.id} memberInfo={member} />
            )
          })
        }
      </div>

    </div>
  );
}


export default App;
