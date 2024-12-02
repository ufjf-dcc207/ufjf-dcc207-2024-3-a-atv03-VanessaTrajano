import "./App.css";
import Animal from "./Animal";

function App() {
  return (
    <div className="app">
      <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={true} />
      <Animal icone="🦩" nome="Flamingo" peso={12.0} emExtincao={true} />
      <Animal icone="🦒" nome="Girafa" peso={1200.0} emExtincao={true} />
      <Animal icone="🦜" nome="Papagaio" peso={0.4} emExtincao={false} />
    </div>
  );
}

export default App;
