import React from "react";
import {Link, useParams} from "react-router-dom";
import {PROJECT_COLUMN_NAMES, UserItem, TaskItem} from './Projects'
import _ from "lodash";


const ProjectItem = ({item, tasks, users}) => {
    let projectTasks = tasks.filter(task => task.project === item.id)
    let projectUsers = users.filter(user => item.users.includes(user.id))
    return (<tr>
        <td><Link to={`/projects/${item.id}`}>{item.id}</Link></td>
        <td>{item.name}</td>
        <td>{projectUsers.map(user => <UserItem user={user}/>)}</td>
        <td><a href={item.repoLink}>{item.repoLink}</a></td>
        <td>{item.createdAt}</td>
        <td>{projectTasks.map(task => <TaskItem task={task}/>)}</td>
    </tr>)
}

export const ProjectDetail = ({items, tasks, users}) => {
    let {id} = useParams()
    let project = items.filter(item => item.id === id)
    if (project) {
        return (!_.isEmpty(project) ?
                <table className='body'>
                    <thead>
                    <tr>
                        {PROJECT_COLUMN_NAMES.map(item => <th>{item}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {project.map((item) => <ProjectItem users={users} item={item} tasks={tasks}/>)}
                    </tbody>
                </table>
                :
                <h4>Ooops, such project not found!</h4>
        )
    }
}
