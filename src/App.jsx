import Info from './components/Info';
import Details from './components/Details';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [operaciones, setOperaciones] = useState([
    { tipo: 'ingreso', monto: 500 },
    { tipo: 'egreso', monto: 200 },
    { tipo: 'ingreso', monto: 50 },
    { tipo: 'egreso', monto: 20 },
  ]);

  return (
    <>
      <Info operaciones={operaciones} />
      <Input setOperaciones={setOperaciones} operaciones={operaciones} />
      <Details operaciones={operaciones} />
    </>
  );
}

export default App;
