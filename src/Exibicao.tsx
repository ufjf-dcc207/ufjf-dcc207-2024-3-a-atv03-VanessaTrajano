import "./Exibicao.css";

interface ExibicaoProps {
    abertura: Date;
    fechamento: Date;
    cercado: string;
}

function Exibicao({abertura:inicio, fechamento:fim, cercado:local}:ExibicaoProps) {
  return (
    <div className="exibicao">
      <div className="inicio">{inicio.toLocaleString()}</div>
      <div className="fim">{fim.toLocaleString()}</div>
      <div className="local">{local}</div>
    </div>
  );
}

export default Exibicao;
