import React from "react";
import {Link} from "react-router-dom";
import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

export const USER_COLUMN_NAMES = ['Username', 'First name', 'Last name', 'Email']

export const ProjectItem = ({item}) => {
    return (
        <div><Link to={`/projects/${item.id}`} class='customLink'>{item.name}</Link></div>
    )
}

export const UserItem = ({user}) => {
    return (
        <Tr>
            <Td><Link to={`/users/${user.id}`} class='customLink'>{user.username}</Link></Td>
            <Td>{user.firstName}</Td>
            <Td>{user.lastName}</Td>
            <Td>{user.email}</Td>
        </Tr>
    )
}

export const UserList = ({users}) => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                <TableCaption>Users list</TableCaption>
                <Thead>
                    <Tr>
                        {USER_COLUMN_NAMES.map(item => <Th>{item}</Th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user) => <UserItem user={user}/>)}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
