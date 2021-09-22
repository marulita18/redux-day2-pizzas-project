import logo from "./logo.svg";
import "./App.css";
import PizzaList from "./components/PizzaList";
import Pizzas from "./components/AddPizzaForm";
function App() {
  return (
    <div className="App">
      <PizzaList />
      <Pizzas />
    </div>
  );
}

export default App;
