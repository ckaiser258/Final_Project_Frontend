// This doubles as a team page as well as an AthletesContainer since athletes are sorted by team

import React, {Component} from 'react'
import { api } from "../services/api"

class TeamProfile extends Component {
    state = {  }
    render() { 
    return ( <div>{this.props.team.name}</div> );
    }
}
 
export default TeamProfile