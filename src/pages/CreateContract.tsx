<<<<<<< HEAD
import { useState } from "react";
import type { Blueprint, Contract } from "../App";

type Props = {
  blueprints: Blueprint[];
};

type UIStatus = Contract["status"] | "Draft";

function CreateContract({ blueprints }: Props) {
  const [contractName, setContractName] = useState("");
  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState<UIStatus>("Draft");

  const selectedBlueprint = blueprints.find(
    (bp) => bp.name === selected
  );

  function saveContract() {
    const newContract: Contract = {
      id: Date.now(),
      name: contractName,
      blueprint: selected,
      status: "Locked",
      createdAt: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(
      localStorage.getItem("contracts") || "[]"
    );

    localStorage.setItem(
      "contracts",
      JSON.stringify([...existing, newContract])
    );

    setStatus("Locked");
    alert("Contract saved successfully");
  }

  return (
    <div style={card}>
      <h2>Create Contract</h2>

      <p>
        Status:{" "}
        <strong>{status === "Draft" ? "Not created yet" : status}</strong>
      </p>

      {/* CONTRACT NAME */}
      <div style={{ marginBottom: "24px" }}>
        <label style={label}>Contract Name</label>
        <input
          type="text"
          placeholder="e.g. Website Development Agreement"
          value={contractName}
          onChange={(e) => setContractName(e.target.value)}
          style={input}
        />
      </div>

      {/* BLUEPRINT */}
      <div style={{ marginBottom: "24px" }}>
        <label style={label}>Blueprint</label>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            setStatus(e.target.value ? "Created" : "Draft");
          }}
          style={input}
        >
          <option value="">-- Select Blueprint --</option>
          {blueprints.map((bp, i) => (
            <option key={i} value={bp.name}>
              {bp.name}
            </option>
          ))}
        </select>
      </div>

      {/* FIELDS */}
      {selectedBlueprint && (
        <>
          <h3>Contract Fields</h3>
          {selectedBlueprint.fields.map((field, i) => (
            <div key={i} style={{ marginBottom: "16px" }}>
              <label style={label}>{field}</label>
              {field === "Date" && (
                <input type="date" style={input} />
              )}
            </div>
          ))}
        </>
      )}

      {/* ACTIONS */}
      <div style={{ textAlign: "right", marginTop: "24px" }}>
        {status === "Created" && contractName && (
          <button style={primaryBtn} onClick={() => setStatus("Approved")}>
            Approve
          </button>
        )}

        {status === "Approved" && (
          <button style={primaryBtn} onClick={() => setStatus("Sent")}>
            Send
          </button>
        )}

        {status === "Sent" && (
          <button style={primaryBtn} onClick={() => setStatus("Signed")}>
            Sign
          </button>
        )}

        {status === "Signed" && (
          <button style={primaryBtn} onClick={saveContract}>
            Lock & Save
          </button>
        )}
      </div>
    </div>
  );
}

/* STYLES */
const card = {
  maxWidth: "600px",
  margin: "40px auto",
  backgroundColor: "#fff",
  padding: "32px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const label = {
  display: "block",
  marginBottom: "6px",
  fontWeight: 600,
};

const input = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const primaryBtn = {
  padding: "10px 18px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#2563eb",
  color: "#fff",
  cursor: "pointer",
};

export default CreateContract;
=======
import { useState } from "react";
import type { Blueprint, Contract } from "../App";

type Props = {
  blueprints: Blueprint[];
};

type UIStatus = Contract["status"] | "Draft";

function CreateContract({ blueprints }: Props) {
  const [contractName, setContractName] = useState("");
  const [selected, setSelected] = useState("");
  const [status, setStatus] = useState<UIStatus>("Draft");

  const selectedBlueprint = blueprints.find(
    (bp) => bp.name === selected
  );

  function saveContract() {
    const newContract: Contract = {
      id: Date.now(),
      name: contractName,
      blueprint: selected,
      status: "Locked",
      createdAt: new Date().toLocaleDateString(),
    };

    const existing = JSON.parse(
      localStorage.getItem("contracts") || "[]"
    );

    localStorage.setItem(
      "contracts",
      JSON.stringify([...existing, newContract])
    );

    setStatus("Locked");
    alert("Contract saved successfully");
  }

  return (
    <div style={card}>
      <h2>Create Contract</h2>

      <p>
        Status:{" "}
        <strong>{status === "Draft" ? "Not created yet" : status}</strong>
      </p>

      {/* CONTRACT NAME */}
      <div style={{ marginBottom: "24px" }}>
        <label style={label}>Contract Name</label>
        <input
          type="text"
          placeholder="e.g. Website Development Agreement"
          value={contractName}
          onChange={(e) => setContractName(e.target.value)}
          style={input}
        />
      </div>

      {/* BLUEPRINT */}
      <div style={{ marginBottom: "24px" }}>
        <label style={label}>Blueprint</label>
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            setStatus(e.target.value ? "Created" : "Draft");
          }}
          style={input}
        >
          <option value="">-- Select Blueprint --</option>
          {blueprints.map((bp, i) => (
            <option key={i} value={bp.name}>
              {bp.name}
            </option>
          ))}
        </select>
      </div>

      {/* FIELDS */}
      {selectedBlueprint && (
        <>
          <h3>Contract Fields</h3>
          {selectedBlueprint.fields.map((field, i) => (
            <div key={i} style={{ marginBottom: "16px" }}>
              <label style={label}>{field}</label>
              {field === "Date" && (
                <input type="date" style={input} />
              )}
            </div>
          ))}
        </>
      )}

      {/* ACTIONS */}
      <div style={{ textAlign: "right", marginTop: "24px" }}>
        {status === "Created" && contractName && (
          <button style={primaryBtn} onClick={() => setStatus("Approved")}>
            Approve
          </button>
        )}

        {status === "Approved" && (
          <button style={primaryBtn} onClick={() => setStatus("Sent")}>
            Send
          </button>
        )}

        {status === "Sent" && (
          <button style={primaryBtn} onClick={() => setStatus("Signed")}>
            Sign
          </button>
        )}

        {status === "Signed" && (
          <button style={primaryBtn} onClick={saveContract}>
            Lock & Save
          </button>
        )}
      </div>
    </div>
  );
}

/* STYLES */
const card = {
  maxWidth: "600px",
  margin: "40px auto",
  backgroundColor: "#fff",
  padding: "32px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const label = {
  display: "block",
  marginBottom: "6px",
  fontWeight: 600,
};

const input = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const primaryBtn = {
  padding: "10px 18px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#2563eb",
  color: "#fff",
  cursor: "pointer",
};

export default CreateContract;
>>>>>>> caef0008aecd9017741cad0c32af306d9e27b3fb
