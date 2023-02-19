import {Box, Container, Flex, Image, useColorMode} from '@chakra-ui/react';
import {ColorModeSwitcher} from './ColorModeSwitcher';
import Logo from '../images/logo.svg';
import {NavLink} from "react-router-dom";
import React from "react";

export const Header = (props) => {
    const {colorMode} = useColorMode();
    return (
        <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
            <Container maxW="container.xl">
                <Flex justifyContent="space-between" alignItems="center">
                    <a href='/'>
                        <Image
                            src={Logo}
                            alt="Logo"
                            boxSize="50px"
                            objectFit="cover"
                        />
                    </a>
                    <NavLink to="/users" activeClassName="active">Users</NavLink>
                    <NavLink to="/projects" activeClassName="active">Projects</NavLink>
                    <NavLink to="/tasks" activeClassName="active">Tasks</NavLink>
                    {props.isAuthenticated() ?
                        <button onClick={() => props.logout()}>Logout</button> :
                        <NavLink to='/login' activeClassName="login">Login</NavLink>
                    }
                    <div id="username">{props.getUsername()}</div>
                    <ColorModeSwitcher/>
                </Flex>
            </Container>
        </Box>
    )

}
