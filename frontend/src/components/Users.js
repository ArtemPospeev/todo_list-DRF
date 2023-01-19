import React from "react";
import {Link} from "react-router-dom";


function GiveUserProjects(user, projects) {
    let userProjects = []
    for (let project of projects) {
        for (let projectUser of project.users) {
            if (user.id == projectUser.id) {
                userProjects.push(project)
            }
        }
    }
    return userProjects
}

const ProjectItem = ({item}) => {
    return (
        <td><Link to={`/projects/${item.id}`}>{item.name}</Link></td>
    )
}

const UserItem = ({user, projects}) => {
    let userProjects = GiveUserProjects(user, projects)
    return (
        <tr>
            <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.birthdayDate}</td>
            <td>{userProjects.map(project => <ProjectItem item={project}/>)}</td>
        </tr>
    )
}

const UserList = ({users, projects}) => {
    return (
        <table className='body'>
            <th>
                Id
            </th>
            <th>
                Username
            </th>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
            <th>
                Birthday date
            </th>
            <th>
                Projects
            </th>
            {users.map((user) => <UserItem user={user} projects={projects}/>)}
        </table>
    )
}

export default UserList
