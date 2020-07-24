import React, { Component } from "react";
import { api } from "../../services/api";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class NewStatForm extends Component {
  state = {
    test_name: "",
    result: "",
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
    // this.props.addStat(this.state)
    api.performance.createStat(this.state);
    this.props.toggleStatForm()
  };


  render() {
    return (
      <div style={{ marginLeft: 200, marginTop: 20 }}>
        {" "}
        <Container style={{ width: 400 }}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Test Name</Form.Label>
              <Form.Control
                as="select"
                placeholder="Select Test"
                name="test_name"
                value={this.state.test_name}
                onChange={this.handleChange}
              >
                <option disabled>
                  -- Choose From Past Tests --
                </option>
                {this.props.testNames.map((testName) => {
                  return <option key={testName}>{testName}</option>;
                })}
              </Form.Control>
              <Form.Text className="text-muted">
                You can pick from your previous tests here
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter Test Name"
                name="test_name"
                value={this.state.test_name}
                onChange={this.handleChange}
              />
              <Form.Text className="text-muted">
                Or enter a new test here
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Result</Form.Label>
              <Form.Control
                type="number"
                min="1" max="5"
                step={0.01}
                placeholder="Result"
                name="result"
                value={this.state.result}
                onChange={this.handleChange}
              />
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

export default NewStatForm;
