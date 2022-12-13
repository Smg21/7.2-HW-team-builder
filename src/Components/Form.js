/**
 * Create State Variables To Hold Team Members and Hold Form Values 
 * Create Update and Submit Functions
 * I know I will need props because App.js will be sending down the updates 
 */

import React from "react";

const Form = (props) =>{

    const handleChange = event => {
        const { name, value } = event.target;
        /**
         * const name = event.target.name
         * const value = event.target.value
         */
        props.change(name, value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }
    return (
        <form onSubmit = {handleSubmit}>
            <label>Name

            <input 
            placeholder = "Enter Your Name Please "
            value = {values.name}
            name="name"
            onChange={handleChange}

            />
            </label><br />
            <label> Email
                <input
            placeholder="Please Enter Your Email "
            values="email"
            onChange={handleChange}
             />
            </label><br />

            <label>Role
            <input 
            placeholder="Enter your role here"
            value={values.role}
            name="role"
            onChange={handleChange}
            />
            </label>
            <input type="submit" value="Create your Team!" />

        </form>
    )
}

export default Form;