import './App.css';
import { ChakraProvider, Switch } from "@chakra-ui/react";
import Layout from './components/Layouts';
import NavigationBar from './components/NavigationBar';
import theme from './theme'
import { BrowserRouter, Outlet, Route } from "react-router-dom";
import Welcome from './routes/Welcome';
import Account from './routes/Account';
import AppRouter from './AppRouter';

function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <BrowserRouter>
        <NavigationBar>
        
        <AppRouter />
        </NavigationBar>
        </BrowserRouter>
        
      
      </Layout>

    </ChakraProvider>
  );
}

export default App;
