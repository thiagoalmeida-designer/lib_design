import "./App.css";
import Menu from "./components/Menu/Menu";
import Typography from "./components/Typography/Typography";

function App() {
  return (
    <>
      <section className="wrapper">
        <header className="header">Header</header>
        <Menu />
        <main className="main">
          <section className="container">
            <Typography />
          </section>
        </main>
        <footer className="footer">Footer</footer>
      </section>
    </>
  );
}

export default App;
