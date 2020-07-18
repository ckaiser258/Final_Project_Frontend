import React, { Component } from "react";
import { api } from "../services/api";
import { Form, Button } from "react-bootstrap";

class CreateAccount extends Component {
  state = {
    error: false,
    fields: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
    console.log(this.state.fields);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    api.auth
      .createUser(this.state.fields)
      .then((res) => {
        this.props.onCreate(res);
        // this.props.history.push('/')
        console.log(res);
      })
      .catch((error) => alert(error.message));
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try again...</h1> : null}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="first_name"
              value={fields.first_name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
              value={fields.last_name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label> Username </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              value={fields.username}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email"
              name="email"
              value={fields.email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">(We won't spam you)</Form.Text>
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

          <Form.Group>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateAccount;
