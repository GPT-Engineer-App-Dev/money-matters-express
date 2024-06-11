import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction="column" align="center" mb={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Financial Times
        </Heading>
        <Text fontSize="lg">Your trusted source for financial news</Text>
      </Flex>
      <Flex>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h2" size="lg" mb={2}>
                Main Article
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading as="h3" size="md" mb={2}>
                Secondary Article
              </Heading>
              <Text>
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} ml={4} shadow="md" borderWidth="1px">
          <Heading as="h3" size="md" mb={2}>
            Sidebar
          </Heading>
          <Text>
            Additional content or advertisements can go here.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;