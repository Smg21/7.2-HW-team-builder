import React from "react";
const Form = (props) => {
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    props.change(name, value);
 };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input
          placeholder="Enter Your Name Please"
          value={props.values.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        email
        <input
          placeholder="Please Enter Your Email "
          value={props.values.email}
          onChange={handleChange}
          name="email"
        />
      </label>
      <br />

      <label>
        Password
        <input
          placeholder="Enter your password here"
          value={props.values.pass}
          name="pass"
          onChange={handleChange}
        />
      </label>
      <br />
      <label> Agree To The Terms And Conditions 
        <input 
        type="checkbox"
        name="check"
        />
      </label>
      <br />
      <input type="submit" value="Create your Team!" id="Submit" />
    </form>
  );
};

export default Form;