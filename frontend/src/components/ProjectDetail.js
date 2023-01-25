import React from "react";
import {useParams} from "react-router-dom";
import {ProjectItem} from './Projects'


export const ProjectDetail = ({items, tasks}) => {
    let {id} = useParams()
    let project = items.filter(item => String(item.id) === id)
    const columnNames = ['Id', 'Number', 'Name', 'Users', 'Repository link', 'Created at', 'Tasks']
    if (project) {
        return (
            <table className='body'>
                <thead>
                <tr>
                    {columnNames.map(item => <th>{item}</th>)}
                </tr>
                </thead>
                <tbody>
                {project.map((item) => <ProjectItem key={item.id} item={item} tasks={tasks}/>)}
                </tbody>
            </table>)
    }
    return (
        <h4>Ooops, such project not found!</h4>
    )

}
