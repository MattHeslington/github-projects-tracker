import React from 'react'
import { Box } from "@chakra-ui/core";
import Feed from './feed'


export function App() {
    return (
        <Box width="100vw" minHeight={'100vh'} bg="white">
            <Feed/>
        </Box>
    )
}
