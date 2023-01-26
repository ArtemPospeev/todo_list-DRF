import React from "react";
import {Link} from "react-router-dom";


export function GiveUserProjects(user, projects) {
    let userProjects = []
    for (let project of projects) {
        for (let id of project.users) {
            if (user.id === id) {
                userProjects.push(project)
            }
        }
    }
    return userProjects
}

export const ProjectItem = ({item}) => {
    return (
        <div><Link to={`/projects/${item.id}`}>{item.name}</Link></div>
    )
}

export const UserItem = ({user, projects}) => {
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

export const UserList = ({users, projects}) => {
    const columnNames = ['Id', 'Username', 'First name', 'Last name', 'Email', 'Birthday date', 'Projects']
    return (
        <table className='body'>
            <thead>
            <tr>
                {columnNames.map(item => <th>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {users.map((user) => <UserItem user={user} projects={projects}/>)}
            </tbody>
        </table>
    )
}
