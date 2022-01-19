import { useState } from 'react';

function Input({ setOperaciones, operaciones }) {
  const [monto, setmonto] = useState('');
  const [tipo, settipo] = useState('');

  const addOp = (e) => {
    e.preventDefault();
    setOperaciones(...operaciones, { tipo: tipo, monto: monto });
  };

  return (
    <form onSubmit={addOp} class="tres">
      <select onChange={(event) => setmonto(event.target.value)}>
        <option value="ingreso">Ingreso</option>
        <option value="egreso">Egreso</option>
      </select>
      <label for="monto">Monto:</label>
      <input onChange={(event) => settipo(event.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default Input;
