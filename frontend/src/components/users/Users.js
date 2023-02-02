import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {useTable} from "../../hooks/useTable";
import {ROW_PER_PAGE_PROJECTS, ROW_PER_PAGE_USERS} from "../../App";
import {TableFooter} from "../tableFooter/tableFooter";

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
    const [page, setPage] = useState(1);
    const {slice, range} = useTable(users, page, ROW_PER_PAGE_USERS);
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
                    {slice.map((user) => <UserItem user={user}/>)}
                </Tbody>
            </Table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page}/>
        </TableContainer>
    )
}
