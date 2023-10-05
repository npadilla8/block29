import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AllPlayers from './components/AllPlayers';
import SinglePlayers from './components/SinglePlayers';
import Nav from "./components/Nav";

const theme = createTheme ({
  palette: { 
    mode:"dark"
  },
});

// You always want to wrap up your entire App in specified theme provider 
// In the Theme provider you can pass the theme prop

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <div> Puppy Bowl React Project
        <Nav />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/:id" element={<SinglePlayers />} />
      </Routes>
       </div>
    </ ThemeProvider>
  )
};

export default App
