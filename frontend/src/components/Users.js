import React from "react";
import {Link} from "react-router-dom";

export const USER_COLUMN_NAMES = ['Id', 'Username', 'First name', 'Last name', 'Email', 'Projects']

export const ProjectItem = ({item}) => {
    return (
        <div><Link to={`/projects/${item.id}`}>{item.name}</Link></div>
    )
}

export const UserItem = ({user, projects}) => {
    console.log(user)
    console.log(projects[0])
    const userProjects = projects.filter(project => project.users.includes(user.id))
    return (
        <tr>
            <td><Link to={`/users/${user.id}`}>{user.id}</Link></td>
            <td>{user.username}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
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
