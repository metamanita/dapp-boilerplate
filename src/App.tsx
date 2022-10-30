import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Layout from './components/Layouts';
import NavigationBar from './components/NavigationBar';
import theme from './theme'

function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <NavigationBar>
      
        
        </NavigationBar>
      </Layout>

    </ChakraProvider>
  );
}

export default App;
