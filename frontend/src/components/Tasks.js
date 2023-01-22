import React from "react";
import {Link} from "react-router-dom";


export const TaskItem = ({item}) => {
    return (
        <tr>
            <td><Link to={`/tasks/${item.id}`}>{item.id}</Link></td>
            <td>{item.number}</td>
            <td><Link to={`/users/${item.creator.id}`}>{item.creator.username}</Link></td>
            <td><Link to={`/projects/${item.project.id}`}>{item.project.name}</Link></td>
            <td>{item.body}</td>
            <td>{item.createdAt}</td>
            <td>{item.isActive ? 'Yes' : 'No'}</td>
        </tr>)
}

export const TaskList = ({items}) => {
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
            {items.map((item) => <TaskItem item={item}/>)}
        </table>
    )
}
