import "./Animal.css";

interface AnimalProps {
  icone: string;
  nome: string;
  peso: number;
  emExtincao: boolean;
}

function Animal({ icone, nome, peso, emExtincao }: AnimalProps) {
  return <div className="animal">
    <div className="icone">{icone}</div>
    <div className="nome">{nome}</div>
    <div className="peso">{peso.toLocaleString()} kg</div>
    <div className="extincao">Em extinção: {emExtincao}</div>
  </div>;
}

export default Animal;
