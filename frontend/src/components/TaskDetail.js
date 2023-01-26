import React from "react";
import {useParams} from "react-router-dom";
import {TaskItem, TASK_COLUMN_NAMES} from "./Tasks"
import _ from "lodash";

export const TaskDetail = ({items}) => {
    let {id} = useParams()
    let task = items.filter(item => String(item.id) === id)

    return (!_.isEmpty(task) ?
            <table className='body'>
                <thead>
                <tr>
                    {TASK_COLUMN_NAMES.map(item => <th>{item}</th>)}
                </tr>
                </thead>
                <tbody>
                {task.map((item) => <TaskItem item={item}/>)}
                </tbody>
            </table> :

            <h4>Ooops, such task not found!</h4>
    )
}
