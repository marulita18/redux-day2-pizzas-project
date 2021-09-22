const initialState = {
  name: "Mariel",
  id: 42,
  favorites: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/toggleFavorite": {
      const id = action.payload;

      const favorites = state.favorites.includes(id) // check using .includes
        ? state.favorites.filter((favoriteId) => favoriteId !== id) // remove using .filter
        : [...state.favorites, id]; // add
      // const newState = [...state.favorites, id]];

      return {
        ...state,
        favorites,
      };
    }

    default: {
      return state;
    }
  }
}
