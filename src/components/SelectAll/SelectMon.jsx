import { memo, useRef, useState } from "react";

const SelectMon = ({ pokeKey, fetchPoke, setPoke, team, setAbi, pokeData }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const filteredList = useRef(null);
  const name = useRef(null);

  const handleFilterChange = (e) => {
    const newFilter = pokeData.filter((pokeName) => {
      return pokeName.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (e.target.value === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleKeyDown = (e) => {
    if (selectedItem < filteredData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < filteredData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        e.preventDefault();
        filteredList.current.children[selectedItem].click();
      }
    } else {
      setSelectedItem(-1);
    }
  };

  const handleFetch = (e) => {
    e.preventDefault();
    name.current.value = e.target.value;
    fetchPoke(e.target.value, pokeKey, setPoke);
    setFilteredData([]);
    e.target.blur();
  };

  const handleSelectAbi = (e) => {
    setAbi({ id: pokeKey, currentAbi: e.target.value });
  };

  return (
    <div className="flex flex-col text-sm sm:text-xl relative">
      <div className="flex flex-row gap-2">
        <label htmlFor={pokeKey}>Pokémon {pokeKey[4]}:</label>
        <input
          type="text"
          id={pokeKey}
          ref={name}
          className="text-black w-28 sm:w-fit bg-white focus:outline focus:outline-2 outline-stone-200 focus:outline-stone-400 hover:bg-stone-200 rounded-md px-2 py-1"
          onChange={handleFilterChange}
          autoComplete="off"
          onKeyDown={handleKeyDown}
        />
      </div>
      {filteredData.length !== 0 && (
        <div
          ref={filteredList}
          className="border-2 border-stone-300 rounded-md absolute w-full bg-white text-black top-10 right-0 z-10"
        >
          {filteredData.slice(0, 5).map((pokeName, id) => {
            return (
              <button
                value={pokeName.name}
                key={id}
                className={`hover:bg-stone-200 px-2 py-1 w-full capitalize focus:outline-stone-400 ${
                  selectedItem === id ? "bg-stone-200" : ""
                }`}
                onClick={handleFetch}
              >
                {pokeName.name}
              </button>
            );
          })}
        </div>
      )}
      {team[pokeKey].ability && (
        <div className="my-3 indent-2">
          <label htmlFor={"ability" + pokeKey} className=" ">
            Ability:
          </label>
          <select
            onChange={handleSelectAbi}
            className="bg-stone-500 text-white rounded-lg ml-2 py-1 px-3"
          >
            <option value="none">none</option>
            {Object.keys(team[pokeKey].ability).map((ab, key) => {
              if (ab !== "selected") {
                return (
                  <option value={ab} key={key}>
                    {ab}
                  </option>
                );
              }
            })}
          </select>
        </div>
      )}
    </div>
  );
};
export default memo(SelectMon);
