const initState = {
  filter: "all",
};

export function filterReducer(state = initState, action) {
  return {
    filter: action.entity,
  };
}
