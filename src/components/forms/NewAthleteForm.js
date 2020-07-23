import React, { Component } from "react";
import { api } from "../../services/api";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class NewAthleteForm extends Component {

    state = {
        first_name: "",
        last_name: "",
        year: "",
        image: ""
    }

    handleChange = (e) => {
        this.setState({
            ...this.state, 
            [e.target.name]: e.target.value,
            user_id: this.props.userId,
            team_id: this.props.teamId
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.addAthlete(this.state)
        api.athletes.createAthlete(this.state)
    }

  render() {
    return (
      <div style={{marginLeft: 200, marginTop: 20}}>
        {" "}
        <Container style={{ width: 400 }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Year"
                name="year"
                value={this.state.year}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image Link"
                name="image"
                value={this.state.image}
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

export default NewAthleteForm;