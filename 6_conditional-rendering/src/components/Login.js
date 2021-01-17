import React from "react";
import Input from "./Input";

const form = [
    {
        id: 1,
        type: "text",
        placeholder: "Username"
    },
    {
        id: 2,
        type: "password",
        placeholder: "Password"
    }
]

function Login(){
    return(
        <form className="form">
            {form.map(formInput => (
                <Input 
                    key={formInput.id}
                    type={formInput.type}
                    placeholder={formInput.placeholder}
                />
            ))}
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;