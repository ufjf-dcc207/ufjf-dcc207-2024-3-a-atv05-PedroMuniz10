import './App.css'
import Dependente from './Dependentes'
import funcionarios from "./ufjf-dcc207-2024-3-a-atv05.json";

export default function App() {
  return(
    <div className='app'>
      <Dependente nome={funcionarios.funcionarios[0].dependentes[0].nome} 
      data={funcionarios.funcionarios[0].dependentes[0].data_nascimento} 
      salario={funcionarios.funcionarios[0].dependentes[0].abono_salarial}/>
    </div>
  )
}