var initState = {
  api: "",
};

export function selectTypeReducer(state = initState, action) {
  return {
    api: action.api,
  };
}
