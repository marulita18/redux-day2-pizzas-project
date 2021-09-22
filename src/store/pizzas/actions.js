export const addPizza = (name, description) => {
  return {
    type: "addPizza",
    payload: { name, description },
  };
};
