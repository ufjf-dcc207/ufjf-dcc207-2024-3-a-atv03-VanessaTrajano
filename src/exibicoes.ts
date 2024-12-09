type ExibicaoTuplaType = [string, string, string, AnimaisTuplaType[]];
type AnimaisTuplaType = [string, string, number, boolean];

const EXIBICOES: ExibicaoTuplaType[] = [
  [
    "A1",
    "2024-12-06T08:00:00.000-03:00",
    "2024-12-06T16:00-03:00",
    [
      ["🦁", "Leão", 190.0, true],
      ["🦩", "Flamingo", 12.0, true],
    ],
  ],
  [
    "A2",
    "2024-12-06T08:00:00.000-03:00",
    "2024-12-06T16:00-03:00",
    [
      ["🦒", "Girafa", 1200.0, true],
      ["🦜", "Papagaio", 0.4, false],
    ],
  ],
];

export default EXIBICOES;