type Props = {
  page: "create" | "dashboard";
  setPage: (p: "create" | "dashboard") => void;
};

function Header({ page, setPage }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#eaf2ff",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #dbeafe",
      }}
    >
      <h2 style={{ margin: 0 }}>ContractApp</h2>

      <div>
        <button style={btn(page === "create")} onClick={() => setPage("create")}>
          Create Contract
        </button>
        <button
          style={btn(page === "dashboard")}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>
      </div>
    </div>
  );
}

const btn = (active: boolean) => ({
  marginLeft: "10px",
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  backgroundColor: active ? "#2563eb" : "#e5e7eb",
  color: active ? "#fff" : "#111",
});

export default Header;
