import './App.css';
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from './components/Layouts';
import ConnectButton from './components/ConnectButton';
import AccountModal from './components/AccountModal';
import NavigationBar from './components/NavigationBar';
import theme from './theme'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <NavigationBar>
      <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
        </NavigationBar>
      </Layout>

    </ChakraProvider>
  );
}

export default App;
