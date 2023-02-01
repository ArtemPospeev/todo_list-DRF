import React from "react";
import {Link} from "react-router-dom";
import {Table, TableContainer, Tbody, Td, Thead, Tr} from "@chakra-ui/react";


export const PROJECT_COLUMN_NAMES = ['Id', 'Name', 'Users', 'Repository link', 'Created at', 'Tasks']

export const UserItem = ({user}) => {
    return (
        <div><Link to={`/users/${user.id}`}>{user.username}</Link></div>
    )
}

export const TaskItem = ({task}) => {
    return (
        <div><Link to={`/tasks/${task.id}`}> - {task.body.slice(0, 25)}...</Link></div>
    )
}

export const ProjectItem = ({item, tasks, users}) => {
    let projectTasks = tasks.filter(task => task.project === item.id).slice(0, 3)
    let projectUsers = users.filter(user => item.users.includes(user.id)).slice(0, 3)
    return (<Tr>
        <Td><Link to={`/projects/${item.id}`}>{item.id}</Link></Td>
        <Td>{item.name}</Td>
        <Td>{projectUsers.map(user => <UserItem user={user}/>)}</Td>
        <Td><a href={item.repoLink}>{item.repoLink}</a></Td>
        <Td>{item.createdAt}</Td>
        <Td>{projectTasks.map(task => <TaskItem task={task}/>)}</Td>
    </Tr>)
}


export const ProjectList = ({items, tasks, users}) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                <Thead>
                    <Tr>
                        {PROJECT_COLUMN_NAMES.map(item => <th>{item}</th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {items.map((item) => <ProjectItem users={users} item={item} tasks={tasks}/>)}
                </Tbody>
            </Table>
        </TableContainer>)
}

