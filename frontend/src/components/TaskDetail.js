import React from "react";
import {Link, useParams} from "react-router-dom";


const TaskItem = ({item}) => {
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.number}</td>
            <td><Link to={`/users/${item.creator.id}`}>{item.creator.username}</Link></td>
            <td><Link to={`/projects/${item.project.id}`}>{item.project.name}</Link></td>
            <td>{item.body}</td>
            <td>{item.createdAt}</td>
            <td>{item.isActive ? 'Yes' : 'No'}</td>
        </tr>)
}

const TaskDetail = ({items}) => {
    let {id} = useParams()
    let task = items.filter(item => item.id == id)
    return (
        <table className='body'>
            <th>
                Id
            </th>
            <th>
                Number
            </th>
            <th>
                Creator
            </th>
            <th>
                Project
            </th>
            <th>
                Body
            </th>
            <th>
                Created at
            </th>
            <th>
                Is active
            </th>
            {task.map((item) => <TaskItem item={item}/>)}
        </table>
    )
}

export default TaskDetail
