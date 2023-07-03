import { incbonus } from "../actions";
function bonusreducer(state = { bonus:0 }, action) {
    switch (action.type) {
      case incbonus:
            return { bonus: state.bonus + 1 };
    default:
          return state;
    }
  }

export default bonusreducer