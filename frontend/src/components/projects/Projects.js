import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useTable} from "../../hooks/useTable";
import {ROW_PER_PAGE_PROJECTS} from "../../App";
import {TableFooter} from "../tableFooter/tableFooter";


export const PROJECT_COLUMN_NAMES = ['Number', 'Name', 'Users', 'Repository link', 'Created at', 'Tasks']

export const UserItem = ({user}) => {
    return (
        <p><Link to={`/users/${user.id}`} className='customLink'>{user.username}</Link></p>
    )
}

export const TaskItem = ({task}) => {
    return (
        <p><Link to={`/tasks/${task.id}`} className='customLink'> - {task.number}</Link></p>
    )
}

export const ProjectItem = ({item, tasks, users}) => {
    let projectTasks = tasks.filter(task => task.project === item.id).slice(0, 3)
    let projectUsers = users.filter(user => item.users.includes(user.id)).slice(0, 3)
    return (<Tr>
        <Td><Link className='customLink' to={`/projects/${item.id}`}>{item.number}</Link></Td>
        <Td>{item.name}</Td>
        <Td>{projectUsers.map(user => <UserItem user={user}/>)}</Td>
        <Td><a href={item.repoLink}>{item.repoLink}</a></Td>
        <Td>{item.createdAt.slice(0, 10)}</Td>
        <Td>{projectTasks.map(task => <TaskItem task={task}/>)}</Td>
    </Tr>)
}


export const ProjectList = ({items, tasks, users}) => {
    const [page, setPage] = useState(1);
    const {slice, range} = useTable(items, page, ROW_PER_PAGE_PROJECTS);
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                <TableCaption>Projects list</TableCaption>
                <Thead>
                    <Tr>
                        {PROJECT_COLUMN_NAMES.map(item => <Th>{item}</Th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {slice.map((item) => <ProjectItem users={users} item={item} tasks={tasks}/>)}
                </Tbody>
            </Table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page}/>
        </TableContainer>)
}

