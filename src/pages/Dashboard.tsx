import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="card">
          <div className="card-title">Ventas Recientes</div>
          <p>No hay ventas recientes</p>
        </div>

        <div className="card">
          <div className="card-title">DTE Pendientes</div>
          <p>No hay DTEs pendientes</p>
        </div>

        <div className="card">
          <div className="card-title">Estado del Sistema</div>
          <div className="status-item">
            <span>API:</span>
            <span className="status-online">Online</span>
          </div>
          <div className="status-item">
            <span>Tareas Programadas:</span>
            <span className="status-online">Activas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
