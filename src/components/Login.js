import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { api } from "../services/api";

class Login extends Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
      const newFields = { ...this.state.fields,
    [e.target.name]: e.target.value }
    this.setState({ fields: newFields })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    api.auth.login(this.state.fields)
    .then(res => {
        this.props.onLogin(res)
        // this.props.history.push('/')
        console.log(res)
    })
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try again...</h1> : null}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              value={fields.username}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              value={fields.password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
