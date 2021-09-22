export const selectPizzas = (reduxState) => {
  const clonedPizzas = [...reduxState.pizzas.all];

  return clonedPizzas.sort((a, b) => {
    return b.bought - a.bought;
  });
};
