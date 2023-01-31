import React from "react";
import {Link, useParams} from "react-router-dom";
import {PROJECT_COLUMN_NAMES, UserItem, TaskItem} from './Projects'
import _ from "lodash";
import {Table, TableContainer, Tbody, Td, Thead, Tr} from "@chakra-ui/react";


const ProjectItem = ({item, tasks, users}) => {
    let projectTasks = tasks.filter(task => task.project === item.id)
    let projectUsers = users.filter(user => item.users.includes(user.id))
    return (<Tr>
        <Td><Link to={`/projects/${item.id}`}>{item.id}</Link></Td>
        <Td>{item.name}</Td>
        <Td>{projectUsers.map(user => <UserItem user={user}/>)}</Td>
        <Td><a href={item.repoLink}>{item.repoLink}</a></Td>
        <Td>{item.createdAt}</Td>
        <Td>{projectTasks.map(task => <TaskItem task={task}/>)}</Td>
    </Tr>)
}

export const ProjectDetail = ({items, tasks, users}) => {
    let {id} = useParams()
    let project = items.filter(item => item.id === id)
    if (project) {
        return (!_.isEmpty(project) ?
                <TableContainer>
                    <Table variant='striped' colorScheme='blackAlpha' size='sm'>
                        <Thead>
                            <Tr>
                                {PROJECT_COLUMN_NAMES.map(item => <th>{item}</th>)}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {project.map((item) => <ProjectItem users={users} item={item} tasks={tasks}/>)}
                        </Tbody>
                    </Table>
                </TableContainer>

                :
                <h4>Ooops, such project not found!</h4>
        )
    }
}
