import React from 'react'

import { Box, Flex, Heading, Image, Link, Button, Stack, Text } from "@chakra-ui/core";
import { GoIssueOpened, GoRepoForked, GoStar } from 'react-icons/all'

const Repo = (props) => {
    const { isListView = false, repo} = props;
    return (
        <Box borderWidth={1} bg="white" p="15px" rounded="5px">
            <Flex flex={1} flexDir="column">
                {!isListView && (
                    <Flex mb="15px">
                        <Image src="https://uifaces.co/our-content/donated/KtCFjlD4.jpg"
                            w={'35px'}
                            h={'35px'}
                            rounded="5px"
                        />
                        <Box ml="10px">
                            <Heading fontSize="16px">Matt Heslington</Heading>
                            <Text fontSize="13px">View profile</Text>
                        </Box>
                    </Flex>
                )}

                <Box mb="15px">
                    <Box mb="10px">
                        <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
                            {isListView && (
                                <>
                                    <Text color="gray.600">Built by &middot; <Link fontWeight="bold" href="https://github.com/MattHeslington" fontSize="14px" target="_blank">Matt Heslington</Link> &middot; May 29, 2020</Text>
                                </>
                            )}

                        </Flex>
                    </Box>
                    <Text fontSize="14px" color="gray.900">Hunt the most starred projects on any date on Github</Text>
                </Box>
                <Stack isInline>
                    <Button as="a" cursor="pointer" leftIcon={GoStar} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecoration:'none'}}> 3487</Button>
                    <Button as="a" cursor="pointer" leftIcon={GoRepoForked} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecoration:'none'}}> 23</Button>
                    <Button as="a" cursor="pointer" leftIcon={GoIssueOpened} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecoration:'none'}}> 23</Button>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Repo
