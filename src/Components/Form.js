/**
 * Create State Variables To Hold Team Members and Hold Form Values 
 * Create Update and Submit Functions
 * I know I will need props because App.js will be sending down the updates 
 */

import React from "react";

const Form = (props) =>{

    return (
        <form>
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
            </label>
        </form>
    )
}

export default Form;