
import { Box, Container, SimpleGrid } from '@chakra-ui/react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import products from './data/products';



function App() {
  return (
    <Box bg="gray.50">
      <Header />
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
}
export default App 