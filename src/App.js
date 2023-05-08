import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ThemeProvider, createTheme } from '@mui/material';

import Home from './Pages';
import Navbar from './Components/Navbar';
import ParticlesBg from 'particles-bg'
function App() { 
  const [cmode, setCMode] = useState("light");
  
  const theme = createTheme({
    palette: {
      cmode,
      ...(cmode === 'light'
        ? {
            // palette values for light mode
            primary:{ main: "#F5F5F5"},
            secondary: {main: "#D6AD60"},
            divider: { main: "#FFED8A"},
            background: {
              default: "#F5F5F5",
              // paper: "#D6AD60",
              paper: "#F5F5F5",
            },
            text: {
              primary: '#122620',
              secondary: "#D6AD60",
              third: '#A18248'
            },
          }
        : {
            // palette values for dark mode
            primary:{ main: "#0B0C10"},
            secondary: {main: "#66FCF1"},
            divider: { main: "#1F2833"},
            background: {
              default: "#0B0C10",
              paper: "#1F2833",
            },
            text: {
              primary: '#ffffff',
              secondary: '#66FCF1',
              third: '#45A29E'
            },
          }),
    },
  });
  
  return (
    
      // <div className="App">
        <ThemeProvider theme={theme} mode={cmode}>
          
            <Navbar setMode = {setCMode} mode = {cmode}/>
            <div style={{paddingTop: '90px'}}></div>
            {window.innerWidth > 750 
              ? 
              <ParticlesBg type="cobweb" bg={true}  
                  color= 
                  {
                    cmode === 'light'
                    ?
                    "#D6AD60"
                    :
                    "#66FCF1"
                  } 
                  num={80}
              />
              
              :
              <ParticlesBg type="cobweb" bg={true}  
                  color= 
                  {
                    cmode === 'light'
                    ?
                    "#D6AD60"
                    :
                    "#66FCF1"
                  } 
                  num={50}
              />
            }
            <Router>
              <Routes>
              
                <Route path='/' Component={Home} exact/>
              </Routes>
            </Router>
            
            
          
        </ThemeProvider>
      // </div>
    
  );
}

export default App;
