import React, { Component, Fragment } from "react";
import { api } from "../../services/api";
import { Form, Button, Jumbotron, Container } from "react-bootstrap";
import { Typography } from "@material-ui/core";

class EditUser extends Component {
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
    const newFields = {
      ...this.state.fields,
      [e.target.name]: e.target.value,
      id: this.props.currentUser.id,
    };
    this.setState({ fields: newFields });

    console.log(this.state.fields);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.patchUser(this.state);
    this.props.history.push("/home");
  };

  render() {
    const { fields } = this.state;
    return (
      <Fragment>
        <div style={{ paddingRight: 100 }}>
          <Jumbotron className="text-center" style={{ marginBottom: 60 }}>
            <Typography gutterBottom variant="h2" component="h4">
              Edit Profile
            </Typography>
          </Jumbotron>
          {this.state.error ? <h1>Try again...</h1> : null}
          <Container style={{ width: 600 }}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.currentUser.first_name}
                  name="first_name"
                  value={fields.first_name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.currentUser.last_name}
                  name="last_name"
                  value={fields.last_name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label> Username </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.currentUser.username}
                  name="username"
                  value={fields.username}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.currentUser.email}
                  name="email"
                  value={fields.email}
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
                <Form.Text className="text-muted">
                  Your password must be 5-20 characters long.
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="password"
                />
              </Form.Group>

              <Button
                variant="success"
                type="submit"
                style={{ marginBottom: 10 }}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default EditUser;
