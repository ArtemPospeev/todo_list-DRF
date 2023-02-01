import React from "react";
import {Link} from "react-router-dom";
import {Table, TableContainer, Tbody, Td, Thead, Tr} from "@chakra-ui/react";

const TASK_COLUMN_NAMES = ['Id', 'Creator', 'Project', 'Created at', 'Is active']

const TaskItem = ({item, users, projects}) => {
    const creator = users.find(user => user.id === item.creator)
    const project = projects.find(project => project.id === item.project)
    return (
        <Tr>
            <Td><Link to={`/tasks/${item.id}`}>{item.id}</Link></Td>
            <Td><Link to={`/users/${creator.id}`}>{creator.username}</Link></Td>
            <Td><Link to={`/projects/${project.id}`}>{project.name}</Link></Td>
            <Td>{item.createdAt}</Td>
            <Td>{item.isActive ? 'Yes' : 'No'}</Td>
        </Tr>
    )
}

export const TaskList = ({items, users, projects}) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                <Thead>
                    <Tr>
                        {TASK_COLUMN_NAMES.map(item => <th>{item}</th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map((item) => <TaskItem users={users} projects={projects} item={item}/>)}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
