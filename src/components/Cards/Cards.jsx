import { GridCards } from "./styled";

export default function Cards(props) {
  return (
    <GridCards>
      <div className="card text-white bg-primary mb-3" style={{maxWidth: '18em'}}>
        <div className="card-header">Total de casos</div>
        <div className="card-body">
          <h1 className="card-text">
            {props.totalCasos}
          </h1>
        </div>
      </div>
      <div className="card text-white bg-secondary mb-3" style={{maxWidth: '18em'}}>
        <div className="card-header">Óbitos hoje</div>
        <div className="card-body">
          <h1 className="card-text">
            {props.obitosHoje}
          </h1>
        </div>
      </div>
     
      <div className="card text-white bg-danger mb-3" style={{maxWidth: '18em'}}>
        <div className="card-header">Total de mortos</div>
        <div className="card-body">
          <h1 className="card-text">
            {props.mortesTotal}
          </h1>
        </div>
      </div>
      <div className="card text-dark bg-warning mb-3" style={{maxWidth: '18em'}}>
        <div className="card-header">Casos hoje</div>
        <div className="card-body">
          <h1 className="card-text">
            {props.casosHoje}
          </h1>
        </div>
      </div>
      <div className="card text-white bg-success mb-3" style={{maxWidth: '18em'}}>
        <div className="card-header">Total de recuperados</div>
        <div className="card-body">
          <h1 className="card-text">
            {props.recuperados}
          </h1>
        </div>
      </div>
    </GridCards>
  );
}
