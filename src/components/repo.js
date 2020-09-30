import React from 'react'
import moment from 'moment'
import { Box, Flex, Heading, Image, Link, Button, Stack, Text } from "@chakra-ui/core";
import { GoIssueOpened, GoRepoForked, GoStar } from 'react-icons/all'

const Repo = (props) => {
    const { isListView = false, repo} = props;
    return (
        <Box borderWidth={1} bg="white" p="15px" rounded="5px">
            <Flex flex={1} flexDir="column">
                {!isListView && (
                    <Flex mb="15px">
                        <Image
                            src={repo.owner.avatar_url}
                            w={'35px'}
                            h={'35px'}
                            rounded="5px"
                        />
                        <Box ml="10px">
                            <Heading fontSize="16px">{repo.owner.login}</Heading>
                            <Text fontSize="13px">View profile</Text>
                        </Box>
                    </Flex>
                )}

                <Box mb="15px">
                    <Box mb="10px">
                        <Flex fontSize="19px" fontWeight={700} color="purple.700" mb="3px">
                            {isListView && (
                                <>
                                    <Text color="gray.600">Built by &middot; <Link fontWeight="bold" href={repo.owner.html_url} fontSize="14px" target="_blank">
                                        {repo.owner.login}
                                    </Link>{" "}&middot; {moment(repo.created_at).format("MMMM D, YYYY")}</Text>
                                </>
                            )}

                        </Flex>
                    </Box>
                    <Text fontSize="14px" color="gray.900">{repo.description}</Text>
                </Box>
                <Stack isInline spacing="10px">
                    <Button as="a" href={`${repo.html_url}/stargazers`} cursor="pointer" leftIcon={GoStar} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecoration:'none'}}>{repo.stargazers_count}</Button>
                    <Button as="a" href={`${repo.html_url}/network/members`} cursor="pointer" leftIcon={GoRepoForked} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecoration:'none'}}> 23</Button>
                    <Button as="a" href={`${repo.html_url}/issues`} cursor="pointer" leftIcon={GoIssueOpened} variant="link" fontSize="14px" iconSpacing="4px" _hover={{textDecoration:'none'}}>{repo.open_issues_count}</Button>
                </Stack>
            </Flex>
        </Box>
    )
}

export default Repo
