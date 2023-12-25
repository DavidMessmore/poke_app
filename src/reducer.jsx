import { SET_POKE, RESET_POKE, SET_ABI } from "./actions";
import { defaultState } from "./AppLogic";

const reducer = (state, action) => {
  if (action.type === SET_POKE) {
    return {
      ...state,
      team: {
        ...state.team,
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
      team: {
        ...state.team,
        [action.payload.newAbi.id]: {
          ...state.team[action.payload.newAbi.id],
          ability: {
            ...state.team[action.payload.newAbi.id].ability,
            selected: action.payload.newAbi.currentAbi,
          },
        },
      },
    };
  }
  throw new Error(`No matching "${action.type}" - action type`);
};
export default reducer;
