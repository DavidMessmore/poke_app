import { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Typechart from "./components/Typechart";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const url = " https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    axios
      .get(url)
      .then((res) => {
        setPokeData(res.data.results);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <AppContext.Provider value={{ pokeData }}>
      <main
        className={`transition relative h-full ${darkMode ? "dark" : "light"}`}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Typechart />
      </main>
    </AppContext.Provider>
  );
}

export default App;
