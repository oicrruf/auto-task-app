import React, { useState, useEffect } from "react";
import axios from "axios";

interface ICliente {
  _id: string;
  nit: string;
  nrc: string;
  nombre: string;
  direccion: string;
  email: string;
  telefono: string;
  activo: boolean;
}

const Clientes: React.FC = () => {
  const [clientes, setClientes] = useState<ICliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/api/clientes");
        if (response.data.success) {
          setClientes(response.data.data);
        }
        setLoading(false);
      } catch (err) {
        setError("Error cargando los clientes");
        setLoading(false);
        console.error("Error fetching clientes:", err);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Clientes</h1>

      <div className="actions-bar">
        <button className="btn btn-primary">Nuevo Cliente</button>
      </div>

      {loading ? (
        <p>Cargando clientes...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>NIT</th>
                <th>NRC</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.length === 0 ? (
                <tr>
                  <td colSpan={7} className="empty-table">
                    No hay clientes registrados
                  </td>
                </tr>
              ) : (
                clientes.map((cliente) => (
                  <tr key={cliente._id}>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.nit}</td>
                    <td>{cliente.nrc}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.telefono}</td>
                    <td>
                      <span
                        className={`status ${
                          cliente.activo ? "active" : "inactive"
                        }`}
                      >
                        {cliente.activo ? "Activo" : "Inactivo"}
                      </span>
                    </td>
                    <td>
                      <button className="btn-icon">📝</button>
                      <button className="btn-icon">🗑️</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Clientes;
