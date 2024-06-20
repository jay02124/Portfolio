import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Experience from './components/Experience'
import Education from './components/Education'


function App() {

  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contacts />
    </main>
  );
}

export default App;
