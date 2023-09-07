import { useCallback, useReducer } from "react";
import { SET_POKE, RESET_POKE, SET_ABI } from "./actions";
import SelectAll from "./SelectAll";
import DisplayType from "./DisplayType";
import reducer from "./reducer";
import TableType from "./TableType";

export const initialPokes = {
  poke1: {
    name: "",
    sprite: "",
    icon: "",
    types: "",
    ability: "",
  },
  poke2: {
    name: "",
    sprite: "",
    icon: "",
    types: "",
    ability: "",
  },
  poke3: {
    name: "",
    sprite: "",
    icon: "",
    types: "",
    ability: "",
  },
  poke4: {
    name: "",
    sprite: "",
    icon: "",
    types: "",
    ability: "",
  },
  poke5: {
    name: "",
    sprite: "",
    icon: "",
    types: "",
    ability: "",
  },
  poke6: {
    name: "",
    sprite: "",
    icon: "",
    types: "",
    ability: "",
  },
};

export const defaultState = {
  pokes: initialPokes,
  isLoading: false,
  pokeKeys: Object.keys(initialPokes),
};

const Typechart = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
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
    <section className="mt-12 flex flex-col h-full justify-between overflow-x-scroll xl:overflow-hidden">
      <p className="text-center mb-6 font-black mx-1">
        Choose a Pokemon to see his Defensive Coverage
      </p>
      <div className="flex flex-col items-center gap-10 lg:flex-row my-5 lg:justify-evenly">
        <SelectAll
          resetPoke={resetPoke}
          setPoke={setPoke}
          pokeKeys={state.pokeKeys}
          pokes={state.pokes}
          setAbi={setAbi}
        />
        <DisplayType pokes={state.pokes} pokeKeys={state.pokeKeys} />
      </div>
      <p className="text-center my-4 font-black">Defensive Coverage</p>
      <TableType pokes={state.pokes} pokeKeys={state.pokeKeys} />
    </section>
  );
};
export default Typechart;
