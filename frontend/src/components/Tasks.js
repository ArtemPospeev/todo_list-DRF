import React from "react";
import {Link} from "react-router-dom";
import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

const TASK_COLUMN_NAMES = ['Number', 'Name', 'Creator', 'Project', 'Created at', 'Is active']

const TaskItem = ({item, users, projects}) => {
    const creator = users.find(user => user.id === item.creator)
    const project = projects.find(project => project.id === item.project)
    return (
        <Tr>
            <Td><Link to={`/tasks/${item.id}`} class='customLink'>{item.number}</Link></Td>
            <Td>{item.name}</Td>
            <Td><Link to={`/users/${creator.id}`} class='customLink'>{creator.username}</Link></Td>
            <Td><Link to={`/projects/${project.id}`} class='customLink'>{project.name}</Link></Td>
            <Td>{item.createdAt.slice(0,10)}</Td>
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
                        {TASK_COLUMN_NAMES.map(item => <Th>{item}</Th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map((item) => <TaskItem users={users} projects={projects} item={item}/>)}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
