import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Login, Register } from '../pages';
import NavBar from './NavBar';
import Footer from './Footer';

const darkTheme = createTheme({
  pallete: {
    mode: 'dark'
  }
});

function Routing() {
  return (
    <Routes>
      <Route 
        path="/"
        element={<p>Home</p>}
      />
      <Route 
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <Routing />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
