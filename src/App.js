import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Home, About, Resources } from "./components/index";
import Navbar from './components/Navbar';

function App() {
  return (
    <Box sx={{ backgroundColor: '#000'}}>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />            
          <Route path="/resources" exact element={<Resources />} /> 
        </Routes>
    </Box>
  );
}

export default App;

