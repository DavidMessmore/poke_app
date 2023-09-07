import { types, checkWeakness, typesTail } from "./TableTypeLogic";
import TableCell from "./TableCell";

const TableType = ({ pokes, pokeKeys }) => {
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
                {pokes[pokeKey].icon && (
                  <img
                    src={pokes[pokeKey].icon}
                    alt={pokes[pokeKey].name}
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
              <div className={typesTail[type]}>{type}</div>
              <TableCell
                value={add(
                  checkWeakness(
                    pokes[pokeKeys[0]].types,
                    type,
                    pokes[pokeKeys[0]].ability[
                      pokes[pokeKeys[0]].ability.selected
                    ]
                  )
                )}
              />
              <TableCell
                value={add(
                  checkWeakness(
                    pokes[pokeKeys[1]].types,
                    type,
                    pokes[pokeKeys[1]].ability[
                      pokes[pokeKeys[1]].ability.selected
                    ]
                  )
                )}
              />
              <TableCell
                value={add(
                  checkWeakness(
                    pokes[pokeKeys[2]].types,
                    type,
                    pokes[pokeKeys[2]].ability[
                      pokes[pokeKeys[2]].ability.selected
                    ]
                  )
                )}
              />
              <TableCell
                value={add(
                  checkWeakness(
                    pokes[pokeKeys[3]].types,
                    type,
                    pokes[pokeKeys[3]].ability[
                      pokes[pokeKeys[3]].ability.selected
                    ]
                  )
                )}
              />
              <TableCell
                value={add(
                  checkWeakness(
                    pokes[pokeKeys[4]].types,
                    type,
                    pokes[pokeKeys[4]].ability[
                      pokes[pokeKeys[4]].ability.selected
                    ]
                  )
                )}
              />
              <TableCell
                value={add(
                  checkWeakness(
                    pokes[pokeKeys[5]].types,
                    type,
                    pokes[pokeKeys[5]].ability[
                      pokes[pokeKeys[5]].ability.selected
                    ]
                  )
                )}
              />
              <TableCell value={tw} t={"tw"} />
              <TableCell value={tr} t={"tr"} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TableType;
