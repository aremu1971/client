import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { walletData } from '../data';
import { Link as RouterLink } from 'react-router-dom';

const hero = [
  '/img/powered/solana.svg',
  '/img/powered/etherium.png',
  '/img/powered/USDT.png',
  '/img/powered/wallet.png',
  '/img/powered/solana-logo.png',
  '/img/powered/1inch.png',
];

const Wallet = () => {
  return (
    <Container maxW="3xl" w="full" h="full" pt="3">
      <Box textAlign="center" mb="14">
        <Text
          fontSize={{ base: '20px', md: '25px', lg: '30px' }}
          fontWeight="bold"
          mb="14"
        >
          Wallet Connect
        </Text>

        <Text mb="14" lineHeight="7" fontWeight="500">
          The best way to manage all your wallets from a single app. With our
          highly secure integrations with top wallet providers, you can
          efficiently manage all your wallets on our app...
        </Text>

        <Box>
          <Flex align="center" w="full" mb="3">
            <hr
              style={{
                width: '95%',
                color: 'green',
                backgroundColor: 'green',
                borderWidth: 0,
                height: '2px',
                flex: 1,
              }}
            />
            <span style={{ color: '#616161', fontSize: '14px' }}>
              Powered By
            </span>
            <hr
              style={{
                width: '95%',
                color: 'green',
                backgroundColor: 'green',
                borderWidth: 0,
                height: '2px',
                flex: 1,
              }}
            />
          </Flex>

          <VStack align="center">
            {hero.map((item, index) => (
              <Image key={index} src={item} alt={item} boxSize="50px" />
            ))}
          </VStack>
        </Box>
      </Box>

      <VStack h="full" w="full" spacing="5">
        {walletData.map((item, index) => (
          <Link
            key={index}
            as={RouterLink}
            to={`/check?wallet=${item.title}`}
            textDecorationLine={'none'}
            style={{
              textDecoration: 'none',
            }}
            bg="#fff"
            w="full"
            borderRadius="10px"
            h="80px"
            p="10px"
          >
            <HStack spacing={4}>
              <Image boxSize="55px" objectFit="contain" src={item.img} />
              <Text
                color="#333"
                fontWeight="bold"
                fontSize={{ base: '14px', md: '16px' }}
              >
                {item.title}
              </Text>
            </HStack>
          </Link>
        ))}
      </VStack>
    </Container>
  );
};

export default Wallet;
