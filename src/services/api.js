const API_ROOT = `http://localhost:3000/api/v1`

const token = () => localStorage.getItem("token")

const headers = () => {
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token()
    }
}

const getTeams = () => {
    return fetch(`${API_ROOT}/teams/`, {
        headers: headers()
    })
    .then(res => res.json())
}

const getAthletes = () => {
    return fetch(`${API_ROOT}/athletes/`, {
        headers: headers()
    })
    .then (res => res.json())
}

const login = data => {
    return fetch(`${API_ROOT}/login`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({"user": data})
    })
    .then(res => res.json())
}

const getCurrentUser = () => {
    return fetch(`${API_ROOT}/profile`, {
        headers: headers()
    })
    .then(res => res.json())
}

const createUser = data => {
    let obj = {
        first_name: data.first_name,
        last_name: data.last_name,
        username: data.username,
        email: data.email,
        password: data.password
    }
    return fetch(`${API_ROOT}/users`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({"user": obj})
    })
    .catch(error => alert(error.message))
}

const createTeam = (data) => {
    return fetch(`${API_ROOT}/teams`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({"team": data})
    })
    .catch(error => alert(error.message))
}

const createAthlete = (data) => {
    return fetch(`${API_ROOT}/athletes`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({"athlete": data})
    })
    .catch(error => alert(error.message))
}

export const api = {
    auth: {
        login,
        getCurrentUser,
        createUser
    },
    teams : {
        getTeams,
        createTeam
    },
    athletes : {
        getAthletes,
        createAthlete
    }
}