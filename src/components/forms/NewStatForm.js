import React, { Component } from "react";
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
    // return this.props.teamAthletes ? (null) : (
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      athlete_id: this.props.athlete.id,
      team_id: this.props.athlete.team_id,
    })
    //)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStat(this.state)
    this.props.toggleStatForm()
    
  };


  render() {
    return (
      <div style={{ marginLeft: 200, marginTop: 20 }}>
        {" "}
        <Container style={{ width: 400 }}>
          <Form onSubmit={this.handleSubmit}>
          {/* {this.props.teamAthletes ? (<Form.Group>
              <Form.Label>Select an Athlete</Form.Label>
              <Form.Control
                as="select"
                placeholder="Select an Athlete"
                name="test_name"
                value={this.state.test_name}
                onChange={this.handleChange}
              >
                {this.props.teamAthletes.map((athlete) => {
                  return <option key={athlete.id}>{athlete.first_name} {athlete.last_name}</option>;
                })}
              </Form.Control>
            </Form.Group>) : null} */}
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
                min=".01"
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
