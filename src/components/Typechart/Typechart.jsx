import { types, checkWeakness, typesClasses } from "./TypeChartLogic";
import TableCell from "./TableCell";

const TypeChart = ({ team, pokeKeys }) => {
  return (
    <div className="table border-collapse border rounded-md mx-auto text-center font-black dark:border-stone-600 mb-20">
      <div className="table-header-group">
        <div className="table-row">
          <div className="table-cell w-fit align-middle px-6">Types</div>
          {pokeKeys.map((pokeKey) => {
            return (
              <div
                className="table-cell min-w-[110px] align-middle p-1"
                key={pokeKey}
              >
                {team[pokeKey].icon && (
                  <img
                    src={team[pokeKey].icon}
                    alt={team[pokeKey].name}
                    className="h-full w-24"
                  />
                )}
              </div>
            );
          })}
          <div className="table-cell w-fit align-middle p-1">
            Total Weaknesses
          </div>
          <div className="table-cell w-fit align-middle p-1">
            Total Resistances
          </div>
        </div>
      </div>
      <div className="table-row-group ">
        {types.map((type) => {
          let tw = 0;
          let tr = 0;
          const add = (a) => {
            if (a === "") {
              return;
            }
            if (a > 1) {
              tw++;
            }
            if (a < 1) {
              tr++;
            }
            return a;
          };
          return (
            <div
              key={type}
              className="table-row divide-x divide-stone-300 odd:bg-stone-200 dark:divide-stone-600 dark:odd:bg-lessdark"
            >
              <div className={typesClasses[type]}>{type}</div>
              {pokeKeys.map((pokeKey) => {
                return (
                  <TableCell
                    key={pokeKey}
                    value={add(
                      checkWeakness(
                        team[pokeKey].types,
                        type,
                        team[pokeKey].ability[team[pokeKey].ability.selected]
                      )
                    )}
                  />
                );
              })}
              <TableCell value={tw} t={"tw"} />
              <TableCell value={tr} t={"tr"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TypeChart;
