import {
  Box,
  CircularProgress,
  Container,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';

const Validate = () => {
  return (
    <Flex h="100vh" bg="#808080" align="center" flexDir="column">
      <Container textAlign="center" mt="20" px="3">
        <Container maxW="md">
          <Image src="/img/qrcode.jpeg" />
        </Container>

        <Text color="black" mt="5" fontWeight="600">
          Chat ADMIN/SUPPORT for Authetication code
        </Text>
        <Box mt="3" color="black" fontWeight="500">
          <span>validation in progress</span>{' '}
          <CircularProgress isIndeterminate size="40px" />
        </Box>
      </Container>
    </Flex>
  );
};

export default Validate;
