import React from "react";
import {useParams} from "react-router-dom";
import {ProjectItem} from './Projects'
import _ from "lodash";


export const ProjectDetail = ({items, tasks}) => {
    let {id} = useParams()
    let project = items.filter(item => String(item.id) === id)
    const columnNames = ['Id', 'Number', 'Name', 'Users', 'Repository link', 'Created at', 'Tasks']
    if (project) {
        return (!_.isEmpty(project) ?
                <table className='body'>
                    <thead>
                    <tr>
                        {columnNames.map(item => <th>{item}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {project.map((item) => <ProjectItem item={item} tasks={tasks}/>)}
                    </tbody>
                </table>
                :
                <h4>Ooops, such project not found!</h4>
        )
    }
}
