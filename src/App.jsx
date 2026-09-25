//react
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Footer from './components/organisms/Footer/Footer.jsx';
import Navbar from './components/organisms/Navbar/Navbar.jsx';

//mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

//pages
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Details from './pages/Details/Details.jsx';

//functions
import { openingMessageToConsole } from './utils/openingMessageToConsole.js';

//style
import theme from './theme/theme.jsx';

export default function App() {

  useEffect(() => {
    console.log(openingMessageToConsole);
  }, [])

  return (
    <ThemeProvider theme={theme} defaultMode='system'>
      <CssBaseline enableColorScheme />
        <Box component='section' sx={{ backgroundColor: theme.vars.palette.primary.main }}>
          <Container maxWidth='98%' disableGutters sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: { xs: '.75rem', md: '2rem', }, minHeight: '100vh' }}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='projects'>
                  <Route index element={<Projects />} />
                  <Route path=':projectName' element={<Details />} />
                </Route>
              </Routes>
              <Footer />
            </BrowserRouter>
          </Container>
        </Box>
    </ThemeProvider>
  )
}