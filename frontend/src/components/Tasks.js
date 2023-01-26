import React from "react";
import {Link} from "react-router-dom";

export const TASK_COLUMN_NAMES = ['Id', 'Creator', 'Project', 'Body', 'Created at', 'Is active']

export const TaskItem = ({item, users, projects}) => {
    const user = users.find((user) => user.id === item.creator)
    const project = projects.find((project) => project.id === item.project)
    return (
        <tr>
            <td><Link to={`/tasks/${item.id}`}>{item.id}</Link></td>
            <td><Link to={`/users/${user.id}`}>{user.username}</Link></td>
            <td><Link to={`/projects/${project.id}`}>{project.name}</Link></td>
            <td>{item.body}</td>
            <td>{item.createdAt}</td>
            <td>{item.isActive ? 'Yes' : 'No'}</td>
        </tr>
    )
}

export const TaskList = ({items, users, projects}) => {
    return (
        <table className='body'>
            <thead>
            <tr>
                {TASK_COLUMN_NAMES.map(item => <th>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {items.map((item) => <TaskItem item={item} users={users} projects={projects}/>)}
            </tbody>
        </table>
    )
}
