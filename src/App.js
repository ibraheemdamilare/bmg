
// import bgimage from './58534.jpg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Home from './pages/home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './pages/contact'
import Layout from './components/layout';


// preferred sec colour light: #ff4081 main: #f50057 #c51162

const theme = createTheme({
  palette: {
    secondary: pink
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={ <Home />}/>
            <Route path='/contact-us' element={<Contact />}/>
          </Routes>
        </Layout>
       
      </Router>
        
     
      </ThemeProvider>
  );
}

export default App;
