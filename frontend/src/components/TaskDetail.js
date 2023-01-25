import React from "react";
import {useParams} from "react-router-dom";
import {TaskItem} from "./Tasks"


export const TaskDetail = ({items}) => {
    let {id} = useParams()
    let task = items.filter(item => String(item.id) === id)
    const columnNames = ['Id', 'Number', 'Creator', 'Project', 'Body', 'Created at', 'Is active']
    return (
        <table className='body'>
            <thead>
            <tr>
                {columnNames.map(item => <th>{item}</th>)}
            </tr>
            </thead>
            <tbody>
            {task.map((item) => <TaskItem item={item}/>)}
            </tbody>
        </table>
    )
}
