import React, { Component, Fragment } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Typography from "@material-ui/core/Typography";

class Login extends Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    api.auth.login(this.state.fields).then((res) => {
      this.props.onLogin(res);
      this.props.history.push("/home");
      console.log(res);
    });
  };

  render() {
    const { fields } = this.state;
    return (
      <Fragment>
        <div>
          <Jumbotron className="text-center">
            <Typography gutterBottom variant="h2" component="h4">
              <i
                class="far fa-chart-bar fa-spin "
                style={{ marginRight: 25 }}
              ></i>
              Performance Mapper
            </Typography>
          </Jumbotron>
        </div>
        <Container style={{ width: 400 }}>
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

            <Button
              variant="primary"
              type="submit"
              style={{ marginBottom: 10 }}
            >
              Login
            </Button>
          </Form>
          Don't have an account? <Link to="/create-account">Click here.</Link>
        </Container>
      </Fragment>
    );
  }
}

export default Login;
