function Info({ operaciones }) {

  return (
    <div className="top">
      <div className="uno">
        <p>Presupuesto disponible</p>
        <p>{
        operaciones.filter((o) => o.tipo == 'ingreso').reduce((acc, el) => acc + el.monto, 0) - operaciones.filter((o) => o.tipo == 'egreso').reduce((acc, el) => acc + el.monto, 0)    
        }</p>
      </div>

      <div className="dos">
        <div>
          <p>Ingresos totales</p>
          <p>
            {operaciones
              .filter((o) => o.tipo == 'ingreso')
              .reduce((acc, el) => acc + el.monto, 0)}
          </p>
        </div>
        <div>
          <p>Egresos totales</p>
          <p>
            {operaciones
              .filter((o) => o.tipo == 'egreso')
              .reduce((acc, el) => acc + el.monto, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
