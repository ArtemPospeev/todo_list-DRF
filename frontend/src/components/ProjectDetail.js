import React from "react";
import {useParams} from "react-router-dom";
import {ProjectItem, PROJECT_COLUMN_NAMES} from './Projects'
import _ from "lodash";

export const ProjectDetail = ({users, items, tasks}) => {
    let {id} = useParams()
    let project = items.filter(item => String(item.id) === id)
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
