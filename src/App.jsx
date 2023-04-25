import "./App.css";
import data from "./assets/movies.json";
import Section from "./components/Section";

import logo from "./assets/img/logo.png";

function App() {
  return (
    <>
      <img className="logo" src={logo} alt="logo NetFlix" />
      {data.map((item, index) => {
        return (
          <Section
            key={item.category}
            category={item.category}
            images={item.images}
          />
        );
      })}
    </>
  );
}

export default App;
