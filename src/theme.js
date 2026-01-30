
import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e3f9f1',
      100: '#c6f6e0',
      200: '#9ae6b4',
      300: '#68d391',
      400: '#48bb78',
      500: '#38a169', 
      600: '#2f855a',
      700: '#276749',
      800: '#22543d',
      900: '#1c4532',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'xl',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
    },
  },
});

export default theme;

