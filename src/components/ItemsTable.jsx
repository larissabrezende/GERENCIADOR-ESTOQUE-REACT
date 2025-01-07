import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
  const { items } = useStock();

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td data-label="ID">{item.id}</td>
            <td data-label="Nome">{item.name}</td>
            <td data-label="Em Estoque">{item.quantity} unid.</td>
            <td data-label="Categoria">{item.category}</td>
            <td data-label="Ações">
              <Link to={`/items/${item.id}`} className="button is-primary is-small">
                Ver
              </Link>
              <Link to={`/items/${item.id}/update`} className="button is-small">
                Atualizar
              </Link>
              <DeleteButton itemId={item.id} itemName={item.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
