import { useState } from "react";
import { addPizza } from "../store/pizzas/actions";
import { useDispatch } from "react-redux";

export default function AddPizzaForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza!</h2>

      <p>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button
          type="submit"
          onClick={() => {
            dispatch(addPizza(name, description));
            setName("");
            setDescription("");
          }}
        >
          Add this pizza!
        </button>
      </p>
    </form>
  );
}
