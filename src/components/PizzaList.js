import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/user/actions";
import "./PizzaList.scss";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const dispatch = useDispatch();

  return (
    <div className="PizzaList">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}!</strong>
      </p>
      <div>
        <p>The amount of pizzas today is {pizzas.length}:</p>
        {pizzas.map((p) => {
          return (
            <div key={p.id}>
              <ul className="Pizzas">
                <li className="Pizza">
                  <strong> {p.name}</strong>{" "}
                  <button
                    className="FavToggle"
                    onClick={() => dispatch(toggleFavorite(p.id))}
                  >
                    {user.favorites.includes(p.id) ? "♥" : "♡"}
                  </button>{" "}
                  <br />
                  {p.description} <p>This pizza was bought {p.bought}</p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
