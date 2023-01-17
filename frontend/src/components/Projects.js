import React from "react";

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>{item.number}</td>
            <td>{item.name}</td>
            <td>{item.users.join(', ')}</td>
            <td>{item.repoLink}</td>
            <td>{item.createdAt}</td>
        </tr>
    )
}

const ProjectList = ({items}) => {
    return (
        <table className='body'>
            <th>
                Number
            </th>
            <th>
                Name
            </th>
            <th>
                Users
            </th>
            <th>
                Repository link
            </th>
            <th>
                Created at
            </th>
            {items.map((item) => <ProjectItem item={item}/>)}
        </table>
    )
}

export default ProjectList
