import React, { Component } from "react";
import { api } from "../../services/api";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class NewInjuryForm extends Component {
  state = {
    site: "",
    description: "",
    severity: null,
    date: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      athlete_id: this.props.athlete.id,
      team_id: this.props.athlete.team_id,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addInjury(this.state);
    this.props.toggleInjuryForm();
    document.getElementById("close-button").click();
  };

  render() {
    return (
      <div>
        {" "}
        <Container style={{ width: 400 }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Site of Injury</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Injury Site"
                name="site"
                value={this.state.site}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                placeholder="Enter Notes and/or Description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                Enter a brief description and/or notes on the injury.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Severity (1-5)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Severity"
                name="severity"
                min="1"
                max="5"
                value={this.state.severity}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                This can be subjective or discussed with your athletic trainer.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date"
                name="date"
                value={this.state.date}
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

export default NewInjuryForm;
