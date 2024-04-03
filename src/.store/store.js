import { createStore } from "redux";

const initialCat = [];
const store = createStore(reducerMeow, initialCat);

function reducerMeow(state = [], action) {
  switch (action.type) {
    case "CREATE_CAT":
      if (!state.map((item) => item.name).includes(action.name))
        return [
          ...state,
          {
            name: action.name,
            value: action.value,
          },
        ];
      return state;
    case "UPDATE_CAT":
      return state.map((cat) => {
        if (cat.name === action.name) {
          return {
            name: cat.name,
            value: action.value,
          };
        } else return { name: cat.name, value: cat.value };
      });

    default:
      return state;
  }
}

export default store;
