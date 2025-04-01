import React from "react";

const Contato = ({ nome, telefone }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white max-w-sm">
      <h2 className="text-xl font-bold text-gray-800">{nome}</h2>
      <p className="text-gray-600">Telefone: {telefone}</p>
    </div>
  );
};

export default Contato;