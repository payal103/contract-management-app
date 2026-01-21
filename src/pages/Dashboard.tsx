import { useEffect, useState } from "react";
import type { Contract } from "../App";

function Dashboard() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [filter, setFilter] =
    useState<"All" | "Pending" | "Active" | "Signed">("All");

  const [view, setView] = useState<Contract | null>(null);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("contracts") || "[]"
    ) as Contract[];
    setContracts(data);
  }, []);

  function filtered() {
    if (filter === "Pending")
      return contracts.filter(
        (c) => c.status === "Created" || c.status === "Approved"
      );
    if (filter === "Active")
      return contracts.filter((c) => c.status === "Sent");
    if (filter === "Signed")
      return contracts.filter(
        (c) => c.status === "Signed" || c.status === "Locked"
      );
    return contracts;
  }

  return (
    <>
      <div style={card}>
        <h2>Contract Dashboard</h2>

        {/* FILTERS */}
        <div style={{ marginBottom: "20px" }}>
          {["All", "Pending", "Active", "Signed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              style={filterBtn(filter === f)}
            >
              {f}
            </button>
          ))}
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f1f5f9" }}>
              <th style={th}>Contract Name</th>
              <th style={th}>Blueprint</th>
              <th style={th}>Status</th>
              <th style={th}>Created Date</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered().map((c) => (
              <tr key={c.id}>
                <td style={td}>{c.name}</td>
                <td style={td}>{c.blueprint}</td>
                <td style={td}>{c.status}</td>
                <td style={td}>{c.createdAt}</td>
                <td style={td}>
                  <button style={actionBtn} onClick={() => setView(c)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* VIEW MODAL */}
      {view && (
        <div style={overlay}>
          <div style={modal}>
            <h3>Contract Details</h3>
            <p><strong>Name:</strong> {view.name}</p>
            <p><strong>Blueprint:</strong> {view.blueprint}</p>
            <p><strong>Status:</strong> {view.status}</p>
            <p><strong>Created:</strong> {view.createdAt}</p>
            <button style={primaryBtn} onClick={() => setView(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* STYLES */
const card = {
  maxWidth: "1100px",
  margin: "40px auto",
  backgroundColor: "#fff",
  padding: "32px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const th = { padding: "12px", textAlign: "left" as const };
const td = { padding: "12px", borderBottom: "1px solid #e5e7eb" };

const actionBtn = {
  padding: "6px 12px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#2563eb",
  color: "#fff",
  cursor: "pointer",
};

const filterBtn = (active: boolean) => ({
  marginRight: "8px",
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: active ? "#2563eb" : "#e5e7eb",
  color: active ? "#fff" : "#111",
});

const overlay = {
  position: "fixed" as const,
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  backgroundColor: "#fff",
  padding: "24px",
  borderRadius: "10px",
  width: "400px",
};

const primaryBtn = {
  padding: "10px 18px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#2563eb",
  color: "#fff",
  cursor: "pointer",
};

export default Dashboard;
