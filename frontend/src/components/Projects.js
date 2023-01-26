import React from "react";
import {Link} from "react-router-dom";

export const PROJECT_COLUMN_NAMES = ['Id', 'Number', 'Name', 'Users', 'Repository link', 'Created at', 'Tasks']

export const UserItem = ({user}) => {
    return (
        <div><Link to={`/users/${user.id}`}>{user.username}</Link></div>
    )
}

export const TaskItem = ({task}) => {
    return (
        <div><Link to={`/tasks/${task.id}`}>{task.number}:{task.body}</Link></div>
    )
}

export const ProjectItem = ({users, item, tasks}) => {
    let ProjectUsers = users.filter(user => item.users.includes(user.id))
    let projectTasks = tasks.filter(task => task.project === item.id)
    return (<tr>
        <td>{item.id}</td>
        <td>{item.number}</td>
        <td><Link to={`/projects/${item.id}`}>{item.name}</Link></td>
        <td>{ProjectUsers.map(user => <UserItem user={user}/>)}</td>
        <td><a href={item.repoLink}>{item.repoLink}</a></td>
        <td>{item.createdAt}</td>
        <td>{projectTasks.map(task => <TaskItem task={task}/>)}</td>
    </tr>)
}


export const ProjectList = ({users, items, tasks}) => {
    return (
        <table className='body'>
            <thead>
            <tr>
                {PROJECT_COLUMN_NAMES.map(item => <th>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {items.map((item) => <ProjectItem users={users} item={item} tasks={tasks}/>)}
            </tbody>
        </table>)
}

