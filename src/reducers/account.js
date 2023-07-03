import {
  inc,
  dec,
  incbym,
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
} from "../actions";
export function accountreducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };
      break;
    case dec:
      return { amount: state.amount - 1 };
      break;
    case incbym:
      return { amount: state.amount + action.payload };
      break;
      case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

