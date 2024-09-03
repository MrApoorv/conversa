import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
        <Route exact path='/' component={Homepage} />
        <Route exact path='/chats'component={Chatpage}/>
    </div>
    </ChakraProvider>
  );
}

export default App;
