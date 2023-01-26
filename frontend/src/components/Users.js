import React from "react";
import {Link} from "react-router-dom";

export const USER_COLUMN_NAMES = ['Id', 'Username', 'First name', 'Last name', 'Email', 'Birthday date', 'Projects']

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
    let userProjects = projects.filter(project => project.users.includes(user.id))
    return (
        <tr>
            <td>{user.id}</td>
            <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.birthdayDate}</td>
            <td>{userProjects.map(project => <ProjectItem item={project}/>)}</td>
        </tr>
    )
}

export const UserList = ({users, projects}) => {
    return (
        <table className='body'>
            <thead>
            <tr>
                {USER_COLUMN_NAMES.map(item => <th>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {users.map((user) => <UserItem user={user} projects={projects}/>)}
            </tbody>
        </table>
    )
}
