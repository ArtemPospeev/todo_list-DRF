export const allUsersQuery = () => {
    return {
        "query": `{ allUsers {
                        id
                        username
                        firstName
                        lastName
                        birthdayDate
                        email
                   }
        }`,
        "variables": null
    }
}

export const allProjectsQuery = () => {
    return {
        "query": `{
                  allProjects {
                      id
                      number
                      name
                      users {
                          id
                          username
                      }
                      todoSet {
                          id
                          number
                      }
                      repoLink
                      deleted
                      createdAt
                  }
        }`,
        "variables": null
    }
}

export const allTasksQuery = () => {
    return {
        "query": `{
                    allTasks {
                        id
                        number
                        name
                        creator {
                            id
                            username
                        }
                        project {
                            id
                            name
                        }
                        createdAt
                        isActive
                    }
        }`,
        "variables": null
    }
}
export const projectsByUsername = (username) => {
    return {
        "query": `{
                    projectsByUsername(username:${username}) {
                        id
                        name
                    }
                    }`,
        "variables": {"username": `${username}`}
    }
}

