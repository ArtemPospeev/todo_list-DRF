import React from "react";
import {Link, useParams} from "react-router-dom";
import _ from "lodash";
import {Button, SimpleGrid, Stack, Text} from "@chakra-ui/react";


export const TaskDetail = ({items, users, projects}) => {
    const {id} = useParams()
    const task = items.filter(item => String(item.id) === id)[0]
    const creator = users.find(user => user.id === task.creator)
    const project = projects.find(project => project.id === task.project)
    return (!_.isEmpty(task) ?
            <SimpleGrid>
                <Stack textAlign={'left'} maxW={["80%"]} pl={[null, null, "20", "40"]}>
                    <Text>
                        Task ID: {task.id}
                    </Text>
                    <Text>
                        Creator: <Link to={`/users/${creator.id}`}>{creator.username}</Link>
                    </Text>
                    <Text>
                        Project: <Link to={`/projects/${project.id}`}>{project.name}</Link>
                    </Text>
                    <Text>
                        Task body: {task.body}
                    </Text>
                    <Text>
                        Created at: {task.createdAt}
                    </Text>
                    <Text>
                        Is active: {task.isActive ? 'Yes' : 'No'}
                    </Text>

                    <Link to={`/tasks/`}>
                        <Button>Back to tasks list</Button>
                    </Link>
                </Stack>
            </SimpleGrid>
            :

            <h4>Ooops, such task not found!</h4>
    )
}
