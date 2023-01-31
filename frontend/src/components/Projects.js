import React from "react";
import {Link} from "react-router-dom";


export const PROJECT_COLUMN_NAMES = ['Id', 'Name', 'Users', 'Repository link', 'Created at', 'Tasks']

export const UserItem = ({user}) => {
    return (
        <div><Link to={`/users/${user.id}`}>{user.username}</Link></div>
    )
}

export const TaskItem = ({task}) => {
    return (
        <div><Link to={`/tasks/${task.id}`}> - {task.body.slice(0, 25)}...</Link></div>
    )
}

export const ProjectItem = ({item, tasks, users}) => {
    let projectTasks = tasks.filter(task => task.project === item.id).slice(0,3)
    let projectUsers = users.filter(user => item.users.includes(user.id)).slice(0,3)
    return (<tr>
        <td><Link to={`/projects/${item.id}`}>{item.id}</Link></td>
        <td>{item.name}</td>
        <td>{projectUsers.map(user => <UserItem user={user}/>)}</td>
        <td><a href={item.repoLink}>{item.repoLink}</a></td>
        <td>{item.createdAt}</td>
        <td>{projectTasks.map(task => <TaskItem task={task}/>)}</td>
    </tr>)
}


export const ProjectList = ({items, tasks, users}) => {
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

