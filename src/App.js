import { ThemeProvider } from 'styled-components';
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';


const theme = {
  colors:{
    reddy:"#B7253C",
    bluey:'#1473E6',
    darky:'#000000',
    mainbg:'#D0E3FA',
    nexbg:'#B8B8B8',
    whitey:'#FFFFFF',
  },
  fonts:{
    fontbold:'Pantonb',
    fontlightx:'Pantonex',
    font:'Pantonx',
    fontsemib:'Pantons',
    fontregular:'Pantonr',

  }
}

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <div className="App">
          <Header/>
          <Banner/>
          <About/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
