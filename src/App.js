import logo from './logo.svg';
import './components/css/App.css';
import { NavBar } from './components/navbar';
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Project'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
