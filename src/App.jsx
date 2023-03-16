import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { Buttons } from './components/Buttons';

export function App() {
  
  return (
    <div>
    <Header />

       <AboutMe />
 
    <Buttons />
    </div>
  )
}


