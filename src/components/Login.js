import React, { Component, Fragment } from "react";
import { api } from "../services/api";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Typography from "@material-ui/core/Typography";
import TypeIt from "typeit-react";
import ReactLoading from "react-loading";

class Login extends Component {
  state = {
    error: false,
    fields: {
      username: "",
      password: "",
    },
    isLoading: false,
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.username.value && e.target.password.value) {
      this.setState({
        isLoading: true,
      });
    }
    api.auth
      .login(this.state.fields)
      .then((res) => {
        if (!res.message) {
          this.props.onLogin(res);
          this.props.history.push("/home");
        } else {
          this.setState({
            ...this.state,
            error: true,
          });
        }
      })
      .then((res) => {
        this.setState({
          isLoading: false,
        });
      });
  };

  text = "Getting Your Data";

  // componentDidUpdate() {
  //       setTimeout(() => {
  //       this.text = "Almost There..."
  //       console.log(this.text)
  // }, 10000)} //Not currently working

  // componentWillUnmount() {
  //   clearTimeout()
  // }

  render() {
    const { fields } = this.state;
    const loading = this.state.isLoading;
    if (loading) {
      return (
        <div className="loader center-screen">
          <ReactLoading
            type={"bars"}
            color={"grey"}
            style={{ width: "105px", fill: "grey", marginLeft: "46%" }}
          />
          <Typography gutterBottom variant="h4" component="h4">
            <TypeIt>{this.text}</TypeIt>
          </Typography>
        </div>
      );
    }
    return (
      <Fragment>
        <div>
          <Jumbotron
            className="text-center"
            style={{
              marginBottom: 60,
              padding: 45,
              backgroundColor: "#F5E100",
            }}
          >
            <Typography gutterBottom variant="h2" component="h4">
              <TypeIt
                getBeforeInit={(instance) => {
                  instance
                    .type("Weclom")
                    .pause(150)
                    .move(-2)
                    .delete(2)
                    .type("lc")
                    .move(5)
                    .type("e")
                    .type(" to <em><strong>Performance Mapper</strong></em>")
                    .go();
                  return instance;
                }}
              />
              {/* <i
                class="fa fa-spinner fa-spin fa-fw"
                style={{ marginRight: 25 }}
              ></i> */}
            </Typography>
          </Jumbotron>
        </div>
        <Container style={{ width: 400 }}>
          {this.state.error ? (
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              style={{ color: "red", marginBottom: "2%" }}
            >
              Please Try Again...
            </Typography>
          ) : null}
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
          Don't have an account? <Link to="/create-account">Click here.</Link>{" "}
        </Container>
        <br />
        <p className="text-center">
          <small>
            <strong>
              (For long-term user experience: <em>Username: user</em>,{" "}
              <em>Password: 12345</em>)
            </strong>
          </small>
        </p>
      </Fragment>
    );
  }
}

export default Login;
