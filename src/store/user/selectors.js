export const selectUser = (reduxState) => {
  console.log("redux state", reduxState);
  return reduxState.user;
};
