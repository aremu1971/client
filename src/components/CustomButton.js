import { Button } from '@chakra-ui/react';
import React from 'react';
import { CgArrowRightO } from 'react-icons/cg';

export default function CustomButton({ loading, loadingText, ...rest }) {
  return (
    <Button
      colorScheme="blue"
      variant="outline"
      w="full"
      bgColor="#007bff"
      textAlign="center"
      fontSize="18px"
      fontWeight={400}
      color="white"
      _hover={{ bgColor: '#3182ce', opacity: 0.8 }}
      mt="20px"
      type="submit"
      {...rest}
      isLoading={loading}
      loadingText={loadingText}
      spinnerPlacement="end"
    >
      <span style={{ paddingRight: '10px' }}>CONNECT</span>
      <CgArrowRightO />
    </Button>
  );
}
