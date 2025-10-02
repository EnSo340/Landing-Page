import React from "react";

const Header = () => {
  return (
    <header className="cabecalho">
      <nav className="cabecalho-menu">
        <a className="cabecalho-link" href="/">
          Home
        </a>
        <a className="cabecalho-link" href="/sobre">
          Sobre mim
        </a>
        <a className="cabecalho-link" href="/portfolio">
          Meu portfólio
        </a>
      </nav>
    </header>
  );
};
export default Header;
