import Display from "./Display";

const DisplayAll = ({ team, pokeKeys }) => {
  return (
    <div className="grid grid-cols-3 gap-10 text-sm sm:text-xl dark:bg-lessdark rounded-lg p-1 font-black ">
      {pokeKeys.map((pokeKey) => {
        return (
          <Display
            key={pokeKey}
            name={team[pokeKey].name}
            src={team[pokeKey].sprite}
            types={team[pokeKey].types}
          />
        );
      })}
    </div>
  );
};
export default DisplayAll;
