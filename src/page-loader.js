import React from 'react'
import { Flex, Spinner } from "@chakra-ui/core"

export function PageLoader() {
    return (
        <Flex
            position="fixed"
            left={0}
            right={0}
            bottom={0}
            top={0}
            slignItems="center"
            justifyContent="center"
            bg="white"
            zIndex={999}
        >
            <Spinner thickness="5px" color="gray.400" />

        </Flex>
    )
}

export default PageLoader