const API_ROOT = `https://performancemapper-backend.herokuapp.com/api/v1`

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

const getStats = () => {
    return fetch(`${API_ROOT}/stats/`, {
        headers: headers()
    })
    .then (res => res.json())
}

const getInjuries = () => {
    return fetch(`${API_ROOT}/injuries/`, {
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

const editUser = data => {
    let obj = {
        id: data.fields.id,
        first_name: data.fields.first_name,
        last_name: data.fields.last_name,
        username: data.fields.username,
        email: data.fields.email,
        password: data.fields.password
    }
    return fetch(`${API_ROOT}/users/${data.fields.id}`, {
        method: "PATCH",
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

const createStat = (data) => {
    return fetch(`${API_ROOT}/stats`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({"stat": data})
    })
    .catch(error => alert(error.message))
}

const createInjury = (data) => {
    return fetch(`${API_ROOT}/injuries`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({"injury": data})
    })
    .catch(error => alert(error.message))
}

const deleteTeam = (data) => {
    return fetch(`${API_ROOT}/teams/${data.id}`, {
        method: "DELETE",
        headers: headers(),
    })
    .then(res => res.json())
    .catch(error => alert(error.message))
}

const deleteAthlete = (data) => {
    return fetch(`${API_ROOT}/athletes/${data.id}`, {
        method: "DELETE",
        headers: headers(),
    })
    .then(res => res.json())
    .catch(error => alert(error.message))
}

const deleteStat = (data) => {
    return fetch(`${API_ROOT}/stats/${data.id}`, {
        method: "DELETE",
        headers: headers(),
    })
    .then(res => res.json())
    .catch(error => alert(error.message))
}

const deleteInjury = (data) => {
    return fetch(`${API_ROOT}/injuries/${data.id}`, {
        method: "DELETE",
        headers: headers(),
    })
    .then(res => res.json())
    .catch(error => alert(error.message))
}

export const api = {
    auth: {
        login,
        getCurrentUser,
        createUser,
        editUser
    },
    teams : {
        getTeams,
        createTeam,
        deleteTeam
    },
    athletes : {
        getAthletes,
        createAthlete,
        deleteAthlete
    },
    performance: {
        createStat,
        createInjury,
        getStats,
        getInjuries,
        deleteStat,
        deleteInjury
    }
}