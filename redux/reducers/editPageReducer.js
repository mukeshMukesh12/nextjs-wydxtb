let initState = {
  hashtag: "one",
  title: "two",
};

export function editPageReducer(state = initState, action) {
  // localStorage.setItem(
  //   "changes",
  //   JSON.stringify({ hash: action.hashtag, title: action.title })
  // );
  return {
    // hashtag: action.hashtag,
    // title: action.title,
    state,
  };
}
