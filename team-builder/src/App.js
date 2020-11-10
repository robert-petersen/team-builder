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
    <StyledDiv>
      <header>
        <h1>The A Team</h1>
      </header>
      <div className="allContainer">
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

    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  /* border: 1px solid black; */
  height: 100vh;
  width: 100vw;
  background-color: #16a596;
  header{
    /* border: 1px solid black; */
    height: 20vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fae0df;
  }

  .allContainer{
    display: flex;
    flex-direction: row;

  }
  Form{
    width:20%;
  }
  .membersContainer{
    border: 1px solid black;
    width: 80%;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: center;

  }
  h2{
    margin: 20px;
  }
`;

export default App;
