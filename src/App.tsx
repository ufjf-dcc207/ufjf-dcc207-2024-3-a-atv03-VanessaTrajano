import "./App.css";
import Animal from "./Animal";

function App() {
  return (
    <div className="app">
      <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={true} />
    </div>
  );
}

export default App;
