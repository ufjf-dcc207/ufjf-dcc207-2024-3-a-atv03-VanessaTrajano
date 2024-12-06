import "./Exibicao.css";

interface ExibicaoProps {
    abertura: Date;
    fechamento: Date;
    cercado: string;
}

function Exibicao({abertura:inicio, fechamento:fim, cercado:local}:ExibicaoProps) {
  return (
    <div className="exibicao">
      <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
      <div className="fim">Fechamento: {fim.toLocaleString()}</div>
      <div className="local">Cercado: {local}</div>
    </div>
  );
}

export default Exibicao;
