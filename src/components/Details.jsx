function Details({ operaciones }) {
  return (
    <div class="cuatro">
      <div>
        <p>Resumen Ingresos</p>
        <ul>
          {operaciones
            .filter((o) => o.tipo === 'ingreso')
            .map((op) => (
              <li>{op.monto}</li>
            ))}
        </ul>
      </div>
      <div>
        <p>Resumen Egresos</p>
        <ul>
          {operaciones
            .filter((o) => o.tipo === 'egreso')
            .map((op) => (
              <li>{op.monto}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
