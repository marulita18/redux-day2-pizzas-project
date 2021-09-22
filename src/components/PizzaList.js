import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}!</strong>
      </p>
      <div>
        <p>The amount of pizzas today is {pizzas.length}:</p>
        {pizzas.map((p) => {
          return (
            <div key={p.id}>
              <ul>
                <li>
                  <strong> {p.name}</strong> <br />
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
