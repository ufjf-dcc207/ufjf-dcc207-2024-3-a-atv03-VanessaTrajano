import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";
import { ReactNode } from "react";

type AnimaisTuplaType = [string, string, number, boolean];

const ANIMAIS: AnimaisTuplaType[] = [
  ["🦁", "Leão", 190.0, true],
  ["🦩", "Flamingo", 12.0, true],
  ["🦒", "Girafa", 1200.0, true],
  ["🦜", "Papagaio", 0.4, false],
];

function App() {
  const exA1: ReactNode[] = [];
  const exA2: ReactNode[] = [];

  for (let i = 0; i < ANIMAIS.length; i++) {
    const ex = ANIMAIS[i][2] < 200.0 ? exA1 : exA2;
    ex.push(
      <Animal
        key={ANIMAIS[i][1]}
        icone={ANIMAIS[i][0]}
        nome={ANIMAIS[i][1]}
        peso={ANIMAIS[i][2]}
        emExtincao={ANIMAIS[i][3]}
      />
    );
  }

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
