import React, {Component, Fragment} from 'react';
import Login from "./components/Login"
import { api } from './services/api'
import Button from 'react-bootstrap/Button'

class App extends Component {

  state = {
    auth: {
      user: {}
    }
  }

  login = (data) => {
    localStorage.setItem("token", data.jwt)
    this.setState({
      auth: {
        ...this.state.auth,
        user: { id: data.id, username: data.username }
      }
    })
  }

  logout = () => {
    localStorage.removeItem("token")
    this.setState({auth: {user:{}}})
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        this.setState({
          auth: {
            ...this.state.auth,
            user: { id: user.id, username: user.username }
          }
        })
      })
    }
  }

  render() {
  return (
    <Fragment>
    <Login onLogin={this.login}/>
    <Button onClick={this.logout}>Logout</Button>
    </Fragment>
  );
  }
}

export default App;
