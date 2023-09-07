import { useRef, memo } from "react";
import axios from "axios";
import SelectMon from "./SelectMon";
import { abi } from "../TableType/TableTypeLogic";

const SelectAll = ({ resetPoke, setPoke, pokeKeys, pokes, setAbi }) => {
  const formRef = useRef(null);

  const fetchPoke = (name, pokeKey, setPoke) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let newPoke = {};
    axios
      .get(url)
      .then((res) => {
        let newAbi = "";
        let checkPokeAbi = res.data.abilities.filter((ability) => {
          return abi[ability.ability.name];
        });
        if (checkPokeAbi.length > 0) {
          newAbi = checkPokeAbi.reduce((obj, ability) => {
            if (abi[ability.ability.name]) {
              obj[ability.ability.name] = abi[ability.ability.name];
              return obj;
            }
          }, {});
          newAbi["selected"] = "";
        }
        newPoke = {
          name: res.data.name,
          sprite:
            res.data.sprites.versions["generation-v"]["black-white"].animated
              .front_default || res.data.sprites.front_default,
          icon: res.data.sprites.versions["generation-viii"].icons
            .front_default,
          types: {},
          ability: newAbi,
        };
        return axios.all(
          res.data.types.map((item) => axios.get(item.type.url))
        );
      })
      .then((res) => {
        res.map((item) => {
          newPoke.types[item.data.name] = {
            double_damage_from: item.data.damage_relations.double_damage_from,
            half_damage_from: item.data.damage_relations.half_damage_from,
            no_damage_from: item.data.damage_relations.no_damage_from,
          };
        });
        setPoke({ id: pokeKey, updatedPoke: newPoke });
      })
      .catch((err) => console.log(err.message));
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetPoke();
    formRef.current.reset();
  };
  return (
    <form
      ref={formRef}
      id="selectAllForm"
      className="flex flex-col rounded-lg bg-stone-300 h-fit w-fit items-center p-6 border-2 border-stone-500 dark:bg-lessdark gap-2 overscroll-contain"
    >
      {pokeKeys.map((pokeKey) => {
        return (
          <SelectMon
            pokes={pokes}
            setAbi={setAbi}
            pokeKey={pokeKey}
            fetchPoke={fetchPoke}
            setPoke={setPoke}
            key={pokeKey}
          />
        );
      })}
      <button
        className="bg-stone-500 py-2 px-3 mt-4 rounded-lg transition hover:bg-stone-600 text-white"
        onClick={handleReset}
      >
        RESET
      </button>
    </form>
  );
};
export default memo(SelectAll);
