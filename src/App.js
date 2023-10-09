
import './App.css';
import Content from './Components/Content/Content';
import Display from './Components/Display/Display';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Content/>
    <Display/>
    <Footer/>
    </div>
  );
}

export default App;
