import styles from './App.module.css';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Hobbies } from './components/Hobbies/Hobbies';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
  <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Hobbies/>
    <Contact/>
  </div>
  );
}

export default App;