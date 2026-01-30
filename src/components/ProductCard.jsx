import { Box, Image, Text, Heading, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function ProductCard({ product, index }) {
  return (
    <MotionBox
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Image src={product.image} alt={product.nom} />
      <Box p={4}>
        <Heading fontSize="lg">{product.nom}</Heading>
        <Text mt={2}>{product.description}</Text>
        <Text fontWeight="bold" mt={2}>{product.prix}</Text>
        <Button mt={4} colorScheme="teal" width="full">
          Ajouter au panier
        </Button>
      </Box>
    </MotionBox>
  );
}
