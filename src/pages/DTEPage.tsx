import React, { useState } from "react";
import axios from "axios";

const DTEPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCurrentMonthEmails = async () => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      const response = await axios.post(
        "http://localhost:3000/api/emails/current-month"
      );
      setResult(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Error procesando la solicitud");
      setLoading(false);
      console.error("Error fetching emails:", err);
    }
  };

  const sendDTEEmail = async () => {
    try {
      setLoading(true);
      setError(null);
      setResult(null);

      const response = await axios.post(
        "http://localhost:3000/api/attachments/dte/email"
      );
      setResult(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Error enviando email");
      setLoading(false);
      console.error("Error sending email:", err);
    }
  };

  return (
    <div>
      <h1>Documentos Tributarios Electrónicos (DTE)</h1>

      <div className="card">
        <div className="card-title">Operaciones DTE</div>

        <div className="action-buttons">
          <button
            className="btn btn-primary"
            onClick={fetchCurrentMonthEmails}
            disabled={loading}
          >
            {loading ? "Procesando..." : "Buscar DTEs del Mes Actual"}
          </button>

          <button
            className="btn btn-secondary"
            onClick={sendDTEEmail}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar DTEs por Email"}
          </button>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="result-container">
            <h3>Resultado:</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default DTEPage;
