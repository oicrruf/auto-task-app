import React, { useState, useEffect } from "react";
import axios from "axios";

interface IVenta {
  _id: string;
  tipo: "FACTURA" | "CCF";
  numeroDocumento: string;
  fecha: string;
  clienteId: any;
  subtotal: number;
  iva: number;
  total: number;
  estado: "ACTIVO" | "ANULADO";
}

const Ventas: React.FC = () => {
  const [ventas, setVentas] = useState<IVenta[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:3000/api/ventas/listar"
        );
        if (response.data.success) {
          console.log(response);
          setVentas(response.data.data);
        }
        setLoading(false);
      } catch (err) {
        setError("Error cargando las ventas");
        setLoading(false);
        console.error("Error fetching ventas:", err);
      }
    };

    fetchVentas();
  }, []);

  return (
    <div>
      <h1>Ventas</h1>

      <div className="actions-bar">
        <button className="btn btn-primary">Nueva Venta</button>
      </div>

      {loading ? (
        <p>Cargando ventas...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Número</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ventas.length === 0 ? (
                <tr>
                  <td colSpan={7} className="empty-table">
                    No hay ventas registradas
                  </td>
                </tr>
              ) : (
                ventas.map((venta) => (
                  <tr key={venta._id}>
                    <td>{venta.tipo}</td>
                    <td>{venta.numeroDocumento}</td>
                    <td>{new Date(venta.fecha).toLocaleDateString()}</td>
                    <td>
                      {venta.clienteId?.nombre || "Cliente no encontrado"}
                    </td>
                    <td>${venta.total.toFixed(2)}</td>
                    <td>
                      <span
                        className={`status ${
                          venta.estado === "ACTIVO" ? "active" : "cancelled"
                        }`}
                      >
                        {venta.estado}
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

export default Ventas;
