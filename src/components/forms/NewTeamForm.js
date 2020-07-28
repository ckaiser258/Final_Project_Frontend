import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class NewTeamForm extends Component {
  state = {
    name: "",
    logo: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      user_id: this.props.userId,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTeam(this.state)
    this.props.history.push("/teams");
    // this.props.showSuccessAlert()
  };

  render() {
    return (
      <div style={{ marginLeft: 200, marginTop: 20 }}>
        {" "}
        <Container style={{ width: 400 }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Team Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Team Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Team Logo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Team Logo"
                name="logo"
                value={this.state.logo}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ marginBottom: 10 }}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default NewTeamForm;
