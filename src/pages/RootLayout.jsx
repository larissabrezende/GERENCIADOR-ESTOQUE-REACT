import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">GERENCIADOR DE ESTOQUE</Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/items">Itens</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Feito com React + Vite!
      </footer>
    </>
  )
}