import React from "react";
import {useParams} from "react-router-dom";
import {TaskItem} from "./Tasks"
import _ from "lodash";


export const TaskDetail = ({items}) => {
    let {id} = useParams()
    let task = items.filter(item => String(item.id) === id)
    const columnNames = ['Id', 'Creator', 'Project', 'Body', 'Created at', 'Is active']

    return (!_.isEmpty(task) ?
            <table className='body'>
                <thead>
                <tr>
                    {columnNames.map(item => <th>{item}</th>)}
                </tr>
                </thead>
                <tbody>
                {task.map((item) => <TaskItem item={item}/>)}
                </tbody>
            </table> :

            <h4>Ooops, such task not found!</h4>
    )
}
