import { SET_POKE, RESET_POKE, SET_ABI } from "./actions";
import { defaultState } from "./Typechart";

const reducer = (state, action) => {
  if (action.type === SET_POKE) {
    return {
      ...state,
      pokes: {
        ...state.pokes,
        [action.payload.newPoke.id]: action.payload.newPoke.updatedPoke,
      },
    };
  }
  if (action.type === RESET_POKE) {
    return defaultState;
  }
  if (action.type === SET_ABI) {
    return {
      ...state,
      pokes: {
        ...state.pokes,
        [action.payload.newAbi.id]: {
          ...state.pokes[action.payload.newAbi.id],
          ability: {
            ...state.pokes[action.payload.newAbi.id].ability,
            selected: action.payload.newAbi.currentAbi,
          },
        },
      },
    };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};
export default reducer;
