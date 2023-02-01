import {Flex, Container, Box, useColorMode} from '@chakra-ui/react';
import React from "react";

export const Footer = () => {
    const {colorMode} = useColorMode()
    return (
        <Box as="footer" py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
            <Container maxW="container.xl" h="10">
                <Flex justifyContent="space-evenly" alignItems="center">
                    <Box>Artem Pospeev</Box>
                    <Box>© 2023</Box>
                </Flex>
            </Container>
        </Box>
    )
}
