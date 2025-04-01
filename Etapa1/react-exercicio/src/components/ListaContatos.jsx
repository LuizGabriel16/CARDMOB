import React, { useState } from "react";
import Contato from "./Contato";

const ListaContatos = () => {
  const [contatos, setContatos] = useState([
    { id: 1, nome: "João Silva", telefone: "(11) 98765-4321" },
    { id: 2, nome: "Maria Oliveira", telefone: "(21) 91234-5678" },
  ]);

  const [novoNome, setNovoNome] = useState("");
  const [novoTelefone, setNovoTelefone] = useState("");

  const adicionarContato = () => {
    if (!novoNome || !novoTelefone) return;
    setContatos([...contatos, { id: Date.now(), nome: novoNome, telefone: novoTelefone }]);
    setNovoNome("");
    setNovoTelefone("");
  };

  const removerContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <input type="text" placeholder="Nome" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} />
      <input type="text" placeholder="Telefone" value={novoTelefone} onChange={(e) => setNovoTelefone(e.target.value)} />
      <button onClick={adicionarContato}>Adicionar Contato</button>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.id}>
            <Contato nome={contato.nome} telefone={contato.telefone} />
            <button onClick={() => removerContato(contato.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaContatos;