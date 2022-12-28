import { Header } from './components/Header';
import { CheckList } from "./components/CheckList";

import styles from './App.module.css'
import './global.css';

function App() {
  return (
    <div className={styles.app}>
    <Header />

    <div className={styles.principalContent}>
      <CheckList />
    </div>
  </div>
  )
}

export default App
