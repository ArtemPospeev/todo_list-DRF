import React from "react";
import {Link, useParams} from "react-router-dom";
import {ProjectItem} from "./Users";
import _ from "lodash";
import {Box, Button, SimpleGrid, Stack, Text} from "@chakra-ui/react";


export const UserDetail = ({users, projects}) => {
    let {id} = useParams();
    let user = users.filter(user => String(user.id) === id)[0];
    const userProjects = projects.filter(project => project?.users.includes(user.id))
    console.log(projects)
    return (!_.isEmpty(user) ?
            <SimpleGrid>
                <Stack textAlign={'left'} maxW={["50%"]} pl={'50px'}>
                    <Text>
                        <strong>Username:</strong> {user.username}
                    </Text>
                    <Text>
                        <strong>First name:</strong> {user.firstName}
                    </Text>
                    <Text>
                        <strong>Last name:</strong> {user.lastName}
                    </Text>
                    <Text>
                        <strong>Birthday date</strong>: {user.birthdayDate}
                    </Text>
                    <Text>
                        <strong>Email:</strong> {user.email}
                    </Text>
                    <strong>Projects:</strong>
                    <Box>
                        {userProjects.map(project => <ProjectItem item={project} key={project.id}/>)}
                    </Box>

                    <Link to={`/projects/`}>
                        <Button>Back to users list</Button>
                    </Link>
                </Stack>
            </SimpleGrid>
            :

            <h4>Ooops, such user not found!</h4>
    )

}