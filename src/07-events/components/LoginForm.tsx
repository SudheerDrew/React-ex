import React, { Component, FormEvent } from "react";

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Username: ${this.state.username}, Password: ${this.state.password}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default LoginForm;
