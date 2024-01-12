import logo from "./logo.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            Coded by Shauna Bratten using{" "}
            <a
              href="https://github.com/Shauna845/React-Dictionary-Project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://sb-react-dictionary-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
