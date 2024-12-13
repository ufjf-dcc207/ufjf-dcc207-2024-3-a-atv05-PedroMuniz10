import funcionarios from "./ufjf-dcc207-2024-3-a-atv05.json";

interface DependentesProps {
    nome: string;
    data: string;
    salario: number;
}

export default function Dependente({
    nome = funcionarios.funcionarios[0].dependentes[0].nome,
    data = funcionarios.funcionarios[0].dependentes[0].data_nascimento,
    salario = funcionarios.funcionarios[0].dependentes[0].abono_salarial,
} : DependentesProps) {
    return (
        <div className="dependente">
            <div className="nome">{nome}</div>
            <div className="data">{data}</div>
            <div className="salario">{salario.toLocaleString(undefined,{minimumFractionDigits:2})}</div>
        </div>
    );
}