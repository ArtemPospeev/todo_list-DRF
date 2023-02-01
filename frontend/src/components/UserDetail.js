import React from "react";
import {useParams} from "react-router-dom";
import {UserItem, USER_COLUMN_NAMES} from "./Users";
import _ from "lodash";
import {Table, TableContainer, Tbody, Thead, Tr} from "@chakra-ui/react";


export const UserDetail = ({users, projects}) => {
    let {id} = useParams();
    let user = users.filter(user => String(user.id) === id);
    return (!_.isEmpty(user) ?
            <TableContainer>
                <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                    <Thead>
                        <Tr>
                            {USER_COLUMN_NAMES.map(item => <th>{item}</th>)}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {user.map((user) => <UserItem user={user} projects={projects}/>)}
                    </Tbody>
                </Table>
            </TableContainer> :

            <h4>Ooops, such user not found!</h4>
    )

}