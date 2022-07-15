import Header from "components/Header";
import Navbar from "components/Navbar";
import Article from "components/Article";
import styles from 'styles/App.module.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className={styles.main_body}>
        <Navbar />
        {/* <Article /> */}
      </section>
    </div>
    
  );
}

export default App;
