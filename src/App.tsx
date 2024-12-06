import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";

function App() {
  return (
    <div className="app">
      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T16:00-03:00")}
        cercado="A1"
      />
      <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={true} />
      <Animal icone="🦩" nome="Flamingo" peso={12.0} emExtincao={true} />
      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T16:00-03:00")}
        cercado="A2"
      />
      <Animal icone="🦒" nome="Girafa" peso={0.0} emExtincao={true} />
      <Animal icone="🦜" nome="Papagaio" peso={0.4} emExtincao={false} />
    </div>
  );
}

export default App;
