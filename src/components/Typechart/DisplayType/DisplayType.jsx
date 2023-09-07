import Display from "./Display";

const DisplayType = ({ pokes, pokeKeys }) => {
  return (
    <div className="grid grid-cols-3 gap-10 text-sm sm:text-xl dark:bg-lessdark rounded-lg p-1 font-black ">
      {pokeKeys.map((pokeKey) => {
        return (
          <Display
            key={pokeKey}
            name={pokes[pokeKey].name}
            src={pokes[pokeKey].sprite}
            types={pokes[pokeKey].types}
          />
        );
      })}
    </div>
  );
};
export default DisplayType;
