import { useState } from "react";
import Header from "./components/Header";
import CreateContract from "./pages/CreateContract";
import Dashboard from "./pages/Dashboard";

export type FieldType = "Text" | "Date" | "Checkbox";

export type Blueprint = {
  name: string;
  fields: FieldType[];
};

export type Contract = {
  id: number;
  name: string;
  blueprint: string;
  status: "Created" | "Approved" | "Sent" | "Signed" | "Locked";
  createdAt: string;
};

function App() {
  const [page, setPage] = useState<"create" | "dashboard">("create");

  // REALISTIC BLUEPRINTS
  const blueprints: Blueprint[] = [
    {
      name: "Service Agreement",
      fields: ["Date"],
    },
    {
      name: "Employment Contract",
      fields: ["Date"],
    },
    {
      name: "Non-Disclosure Agreement",
      fields: ["Date"],
    },
  ];

  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === "create" && <CreateContract blueprints={blueprints} />}
      {page === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;
