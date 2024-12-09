import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";
import { ReactNode } from "react";

function App() {
  const exA1: ReactNode[] = [
    <Animal icone="🦁" nome="Leão" peso={190.0} emExtincao={true} />,
    <Animal icone="🦩" nome="Flamingo" peso={12.0} emExtincao={true} />,
  ];
  const exA2: ReactNode[] = [
    <Animal icone="🦒" nome="Girafa" peso={0.0} emExtincao={true} />,
    <Animal icone="🦜" nome="Papagaio" peso={0.4} emExtincao={false} />,
  ];

  return (
    <div className="app">
      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T16:00-03:00")}
        cercado="A1"
      >
        {exA1}
      </Exibicao>
      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T16:00-03:00")}
        cercado="A2"
      >
        {exA2}
      </Exibicao>
    </div>
  );
}

export default App;
