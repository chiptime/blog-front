import './App.css';
import Header from './layout/Header/Header';
import Main from './pages/Main';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './theme/colors';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <Main></Main>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
