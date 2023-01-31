import React from "react";
import {useParams} from "react-router-dom";
import {TaskItem, TASK_COLUMN_NAMES} from "./Tasks"
import _ from "lodash";
import {Table, TableContainer, Tbody, Thead, Tr} from "@chakra-ui/react";


export const TaskDetail = ({items, users, projects}) => {
    let {id} = useParams()
    let task = items.filter(item => String(item.id) === id)

    return (!_.isEmpty(task) ?
            <TableContainer>
                <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                    <Thead>
                        <Tr>
                            {TASK_COLUMN_NAMES.map(item => <th>{item}</th>)}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {task.map((item) => <TaskItem users={users} projects={projects} item={item}/>)}
                    </Tbody>
                </Table>
            </TableContainer> :

            <h4>Ooops, such task not found!</h4>
    )
}
