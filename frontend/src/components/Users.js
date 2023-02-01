import React from "react";
import {Link} from "react-router-dom";
import {Table, TableCaption, TableContainer, Tbody, Td, Thead, Tr} from "@chakra-ui/react";

export const USER_COLUMN_NAMES = ['Id', 'Username', 'First name', 'Last name', 'Email', 'Projects']

export const ProjectItem = ({item}) => {
    return (
        <div><Link to={`/projects/${item.id}`}>{item.name}</Link></div>
    )
}

export const UserItem = ({user, projects}) => {
    const userProjects = projects.filter(project => project.users.includes(user.id))
    return (
        <Tr>
            <Td><Link to={`/users/${user.id}`}>{user.id}</Link></Td>
            <Td>{user.username}</Td>
            <Td>{user.firstName}</Td>
            <Td>{user.lastName}</Td>
            <Td>{user.email}</Td>
            <Td>{userProjects.map(project => <ProjectItem item={project}/>)}</Td>
        </Tr>
    )
}

export const UserList = ({users, projects}) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                <TableCaption>Users list</TableCaption>
                <Thead>
                    <Tr>
                        {USER_COLUMN_NAMES.map(item => <th>{item}</th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user) => <UserItem user={user} projects={projects}/>)}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
