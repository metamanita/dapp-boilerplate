import './App.css';
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Layout from './components/Layouts';
import ConnectButton from './components/ConnectButton';
import AccountModal from './components/AccountModal';
import NavigationBar from './components/NavigationBar'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
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
