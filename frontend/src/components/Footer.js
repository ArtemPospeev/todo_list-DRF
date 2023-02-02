import {Box, Container, Flex, Image, useColorMode} from '@chakra-ui/react';
import React from "react";
import TG from '../images/tg.svg'
import GH from '../images/github.svg'


export const Footer = () => {
    const {colorMode} = useColorMode()
    return (
        <Box as="footer" py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
            <Container maxW="container.xl" h="10">
                <Flex justifyContent="space-evenly" alignItems="center">
                    <a href="https://t.me/Flopp">
                        <Image
                            src={TG}
                            alt="telegram"
                            boxSize="30px"
                        />
                    </a>
                    <a href="https://github.com/ArtemPospeev">
                        <Image
                            src={GH}
                            alt="github"
                            boxSize="30px"
                        />
                    </a>
                    <Box>pospeev.artem@icloud.com</Box>
                    <Box>© 2023</Box>
                </Flex>
            </Container>
        </Box>
    )
}
