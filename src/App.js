import React, { useState } from "react";
import Form from "./Components/Form";
function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name: "", email: "", role: "" });

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({ name: ``, email: ``, role: `` });
  };

  const onChange = (names, value) => {
    setValues({ ...value, [names]: value });
  };

  return (
    <div className="App">
      <h1>Team Builder App!!</h1>
      <Form values={values} change={onChange} submit={onSubmit} />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            <h1>Email - {member.email}</h1>
            <br />
            <h1>Name - {member.name}</h1>
            <br />
            <h1>Role - {member.role}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;