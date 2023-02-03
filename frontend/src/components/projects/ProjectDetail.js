import React from "react";
import {Link, useParams} from "react-router-dom";
import {TaskItem, UserItem} from './Projects'
import _ from "lodash";
import {Button, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";


export const ProjectDetail = ({items, tasks, users}) => {
    let {id} = useParams()
    let project = items.filter(item => item.id === id)[0]
    let projectTasks = tasks.filter(task => task.project === project.id)
    let projectUsers = users.filter(user => project.users.includes(user.id))
    return (!_.isEmpty(project) ?
            <SimpleGrid>
                <Stack textAlign={'left'} maxW={["50%"]} pl={'50px'}>
                    <Heading>
                        Project number: {project.number}
                    </Heading>
                    <Text>
                        <strong>Name:</strong> {project.name}
                    </Text>
                    <strong>Users:</strong>
                    <Text sx={{flexDirection: 'column', columnCount: '3'}}>
                        {projectUsers.map(user => <UserItem user={user}/>)}
                    </Text>
                    <strong>Tasks:</strong>
                    <Text sx={{display: 'block', flexDirection: 'column', columnCount: '3'}}>
                        {projectTasks.map(task => <TaskItem task={task}/>)}
                    </Text>
                    <Text>
                        <strong>Repository link:</strong> {project.repoLink}
                    </Text>
                    <Text>
                        <strong>Deleted:</strong> {project.deleted ? 'Yes' : 'No'}
                    </Text>
                    <Text>
                        <strong>Created:</strong> {project.createdAt.slice(0,10)}
                    </Text>

                    <Link to={`/projects/`}>
                        <Button>Back to projects list</Button>
                    </Link>
                </Stack>
            </SimpleGrid>

            :
            <h4>Ooops, such project not found!</h4>
    )

}
