import {
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import KeyStore from '../components/KeyStore';
import Phrase from '../components/Phrase';
import PrivateKey from '../components/PrivateKey';

const data = [
  { label: 'Phrase', component: Phrase },
  { label: 'Keystore JSON', component: KeyStore },
  { label: 'Private Key', component: PrivateKey },
];

const Import = () => {
  let [searchParams] = useSearchParams();
  const wallet = searchParams.get('wallet');

  return (
    <Flex justifyContent="center" h="100vh">
      <Container maxW="xl" w="full" mt="56">
        <Text
          fontWeight="500"
          fontSize={{ sm: '20px', md: '24px', lg: '30px' }}
          mb="5"
        >
          Import Wallet
        </Text>
        <Tabs>
          <TabList>
            {data.map((item, index) => (
              <Tab
                _focus={{
                  boxShadow: 'none',
                }}
                mx={{ base: '0px', md: '5' }}
                color={'gray.200'}
                key={index}
              >
                {item.label}
              </Tab>
            ))}
          </TabList>

          <TabPanels px="0" w="500px">
            {data.map((item, index) => (
              <TabPanel px="0" key={index}>
                {
                  <item.component
                    color={'gray.200'}
                    name={wallet}
                    placeholder={'gray.200'}
                  />
                }
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
};

export default Import;
