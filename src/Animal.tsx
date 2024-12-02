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
    {
        peso > 0 ? <div className="peso">{peso.toLocaleString()} kg</div> : <div className="peso">Peso desconhecido</div>
    }
    {emExtincao && <div className="extincao">Em extinção!</div>}
  </div>;
}

export default Animal;
