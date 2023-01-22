import React from "react";
import {Link, useParams} from "react-router-dom";

const UserItem = ({user}) => {
    return (<td><Link to={`/users/${user.id}`}>{user.username}</Link></td>)
}

const TaskItem = ({task}) => {
    return (
        <td><Link to={`/tasks/${task.id}`}>{task.number}:{task.body}</Link></td>
    )
}

const ProjectItem = ({item, tasks}) => {
    let projectTasks = tasks.filter(task => task.project.name == item.name)

    return (<tr>
        <td><Link to={`/projects/${item.id}`}>{item.id}</Link></td>
        <td>{item.number}</td>
        <td>{item.name}</td>
        <td>{item.users.map(user => <UserItem user={user}/>)}</td>
        <td><a href={item.repoLink}>{item.repoLink}</a></td>
        <td>{item.createdAt}</td>
        <td>{projectTasks.map(task => <TaskItem task={task}/>)}</td>
    </tr>)
}


const ProjectDetail = ({items, tasks}) => {
    let {id} = useParams()
    let project = items.filter(item => item.id == id)
    if (project) {
        return (
            <table className='body'>
                <th>
                    Id
                </th>
                <th>
                    Number
                </th>
                <th>
                    Name
                </th>
                <th>
                    Users
                </th>
                <th>
                    Repository link
                </th>
                <th>
                    Created at
                </th>
                <th>
                    Tasks
                </th>
                {project.map((item) => <ProjectItem key={item.id} item={item} tasks={tasks}/>)}
            </table>)
    }
    return (
        <h4>Ooops, such project not found!</h4>
    )

}

export default ProjectDetail
