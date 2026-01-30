import { Box, Heading, Text, VStack } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box bg="brand.500" color="white" py={10}>
      <VStack spacing={2}>
        <Heading>DevStyle Boutique</Heading>
        <Text>Des produits stylés pour les développeurs passionnés</Text>
      </VStack>
    </Box>
  );
}
