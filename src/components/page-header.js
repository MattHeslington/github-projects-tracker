import React from 'react'
import { Button, Flex, Stack } from "@chakra-ui/core";
import { FaGithub, FaChrome, FaTwitter } from 'react-icons/fa'

import Brand from './brand'

const PageHeader = () => {
    return (
        <Flex justifyContent="space-between" alignItems="center" pt="15px">
            <Brand/>
            <Stack isInline>
                <Button leftIcon={FaGithub}>View Source</Button>
                <Button leftIcon={FaChrome} variantColor="red">Use Extension</Button>
                <Button leftIcon={FaTwitter} variantColor="purple">Tweet</Button>
            </Stack>
        </Flex>
    )
}

export default PageHeader