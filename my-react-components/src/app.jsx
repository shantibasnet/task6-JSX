import styles from "./app.module.css";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Nav from "./components/navigation";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <About />
      <Contact />
    </div>
  );
}

export default App;
