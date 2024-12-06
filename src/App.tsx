import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";

function App() {
  return (
    <div className="app">
      <Exibicao/>
      <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={true} />
      <Animal icone="🦩" nome="Flamingo" peso={12.0} emExtincao={true} />
      <Animal icone="🦒" nome="Girafa" peso={0.0} emExtincao={true} />
      <Animal icone="🦜" nome="Papagaio" peso={0.4} emExtincao={false} />
    </div>
  );
}

export default App;
