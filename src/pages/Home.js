import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { homeData } from '../data';

const Home = () => {
  return (
    <Flex
      flexDir="column"
      align="center"
      h="full"
      w="full"
      px={{ base: '20px', md: '40px' }}
      minH="100vh"
    >
      <Flex w="full" flexDir="column" align="center">
        <Heading
          mt="120px"
          fontSize={{ base: '30px', md: '40px', lg: '70px' }}
          as="h1"
        >
          Claim Reward <br />
          Bonus/Airdop
        </Heading>

        <Link
          as={RouterLink}
          to="/wallet"
          textDecorationLine={'none'}
          style={{ textDecoration: 'none', marginTop: '50px' }}
          bg="#0000f2"
          w="full"
          textAlign="center"
          py="8px"
          fontWeight="bold"
          display="block"
        >
          Claim Now
        </Link>
      </Flex>

      <Box mt="80px" textAlign="center" w="full">
        <Heading as="h2" fontSize={{ base: '18px', md: '30px', lg: '40px' }}>
          Please select Issue Category
        </Heading>
        <Text color="#383895">which of this is related to your issue?</Text>

        <VStack mt="20px" align="stretch" w="full">
          {homeData.map((item, index) => (
            <Link
              key={index}
              as={RouterLink}
              to={`/wallet`}
              textDecorationLine={'none'}
              style={{
                textDecoration: 'none',
                marginTop: '0px',
                width: '100%',
              }}
              border="2px solid #2d2d72"
              pt="30px"
              pb="50px"
              px="20px"
              w="full"
            >
              <VStack spacing="20px" align="center" w="full">
                <Image
                  htmlHeight={item.height}
                  htmlWidth={item.width}
                  src={item.icon}
                />

                <Heading as="h3" fontSize="22px">
                  {item.title}
                </Heading>

                <Text>{item.description}</Text>
              </VStack>
            </Link>
          ))}
        </VStack>
      </Box>

      <Box mt="40px" textAlign="center" w="full" mb="10">
        <Heading
          as="h2"
          fontSize="22px"
          fontWeight="700"
          textTransform="uppercase"
        >
          READY TO START
        </Heading>

        <Text fontWeight="500" mt="3">
          We are here to provide help in any related issues you are having with
          your wallet account
        </Text>

        <Link
          as={RouterLink}
          to="/wallet"
          textDecorationLine={'none'}
          style={{ textDecoration: 'none', marginTop: '50px' }}
          bg="#0000f2"
          w="full"
          textAlign="center"
          py="8px"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <span style={{ paddingRight: '10px' }}>Get Started</span>{' '}
          <HiOutlineArrowNarrowRight />
        </Link>
      </Box>
    </Flex>
  );
};

export default Home;
