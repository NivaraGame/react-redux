function reducerDog(state = [], action) {
  switch (action.type) {
    case "SOUND":
      return [...state, { sound: "GAV" }];
    case "SILENT":
      return [...state, { sound: "this dog is stay in silent" }];
    default:
      return state;
  }
}

export default reducerDog;
