import "./Animal.css";

interface AnimalProps {
  icone: string;
  nome: string;
  peso: number;
  emExtincao: boolean;
}

function Animal({ icone, nome, peso, emExtincao }: AnimalProps) {
  return <div className="animal">
    <div>{icone}</div>
    <div>{nome}</div>
    <div>{peso.toLocaleString()} kg</div>
    <div>Em extinção: {emExtincao}</div>
  </div>;
}

export default Animal;
