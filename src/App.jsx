import { useState, useReducer, useCallback } from "react";
import { SET_POKE, RESET_POKE, SET_ABI } from "./actions";
import { defaultState } from "./AppLogic";
import reducer from "./reducer";
import Navbar from "./components/Navbar";
import DisplayAll from "./components/DisplayAll";
import SelectAll from "./components/SelectAll";
import TypeChart from "./components/TypeChart";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const setPoke = useCallback(
    (newPoke) => {
      dispatch({ type: SET_POKE, payload: { newPoke } });
    },
    [dispatch]
  );

  const resetPoke = useCallback(() => {
    dispatch({ type: RESET_POKE });
  }, [dispatch]);

  const setAbi = useCallback(
    (newAbi) => {
      dispatch({ type: SET_ABI, payload: { newAbi } });
    },
    [dispatch]
  );

  return (
    <main
      className={`transition relative h-full ${darkMode ? "dark" : "light"}`}
    >
      <section className="flex flex-row justify-between border-b-2 border-stone-600 py-4 px-8 ">
        <h1 id="title" className="text-3xl font-black">
          Poke App
        </h1>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </section>

      <section className="mt-12 flex flex-col h-full justify-between overflow-x-scroll xl:overflow-hidden">
        <p className="text-center mb-6 font-black mx-1">
          Choose a Pokemon to see his Defensive Coverage
        </p>
        <div className="flex flex-col items-center gap-10 lg:flex-row my-5 lg:justify-evenly">
          <SelectAll
            resetPoke={resetPoke}
            setPoke={setPoke}
            pokeKeys={state.pokeKeys}
            team={state.team}
            setAbi={setAbi}
          />
          <DisplayAll team={state.team} pokeKeys={state.pokeKeys} />
        </div>
        <p className="text-center my-4 font-black">Defensive Coverage</p>
        <TypeChart team={state.team} pokeKeys={state.pokeKeys} />
      </section>
    </main>
  );
}

export default App;
