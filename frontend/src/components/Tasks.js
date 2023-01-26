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
        </tr>
    )
}

export const TaskList = ({items}) => {
    const columnNames = ['Id', 'Number', 'Creator', 'Project', 'Body', 'Created at', 'Is active']
    return (
        <table className='body'>
            <thead>
            <tr>
                {columnNames.map(item => <th>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {items.map((item) => <TaskItem item={item}/>)}
            </tbody>
        </table>
    )
}
