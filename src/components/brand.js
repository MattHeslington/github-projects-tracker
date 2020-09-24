import React from 'react'
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/core";

const Brand = () => {
    return (
        <Flex alignItems="center">
            <Image src="logo.svg" alt="logo" size={16}/>
            <Box ml="10px">
                <Heading fontSize="24px">GitHunt</Heading>
                <Text color="gray.600">The most rated projects on Github</Text>
            </Box>
        </Flex>
    )
}

export default Brand