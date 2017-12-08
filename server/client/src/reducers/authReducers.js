//state object, responsible for this reducer
export default function(state = {}, action) {
  console.log(action);

  switch (action.type) {
    default:
      return state;
  }
}
