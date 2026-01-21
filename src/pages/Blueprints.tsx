<<<<<<< HEAD
import { useState } from "react";

type FieldType = "Text" | "Date" | "Checkbox";

type Blueprint = {
  name: string;
  fields: FieldType[];
};

function Blueprints() {
  const [blueprintName, setBlueprintName] = useState("");
  const [fields, setFields] = useState<FieldType[]>([]);
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [fieldType, setFieldType] = useState<FieldType>("Text");

  function addField() {
    setFields([...fields, fieldType]);
  }

  function createBlueprint() {
    if (blueprintName === "") return;

    const newBlueprint: Blueprint = {
      name: blueprintName,
      fields: fields,
    };

    setBlueprints([...blueprints, newBlueprint]);
    setBlueprintName("");
    setFields([]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blueprint Page</h2>

      <input
        placeholder="Blueprint name"
        value={blueprintName}
        onChange={(e) => setBlueprintName(e.target.value)}
      />

      <button onClick={createBlueprint} style={{ marginLeft: "10px" }}>
        Save Blueprint
      </button>

      <hr />

      <h3>Add Fields</h3>

      <select
        value={fieldType}
        onChange={(e) => setFieldType(e.target.value as FieldType)}
      >
        <option>Text</option>
        <option>Date</option>
        <option>Checkbox</option>
      </select>

      <button onClick={addField} style={{ marginLeft: "10px" }}>
        Add Field
      </button>

      <ul>
        {fields.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <hr />

      <h3>Saved Blueprints</h3>
      <ul>
        {blueprints.map((bp, i) => (
          <li key={i}>
            <strong>{bp.name}</strong>
            <ul>
              {bp.fields.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blueprints;

<button style={{ marginTop: "10px" }}>
  Create Contract
</button>
=======
import { useState } from "react";

type FieldType = "Text" | "Date" | "Checkbox";

type Blueprint = {
  name: string;
  fields: FieldType[];
};

function Blueprints() {
  const [blueprintName, setBlueprintName] = useState("");
  const [fields, setFields] = useState<FieldType[]>([]);
  const [blueprints, setBlueprints] = useState<Blueprint[]>([]);
  const [fieldType, setFieldType] = useState<FieldType>("Text");

  function addField() {
    setFields([...fields, fieldType]);
  }

  function createBlueprint() {
    if (blueprintName === "") return;

    const newBlueprint: Blueprint = {
      name: blueprintName,
      fields: fields,
    };

    setBlueprints([...blueprints, newBlueprint]);
    setBlueprintName("");
    setFields([]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Blueprint Page</h2>

      <input
        placeholder="Blueprint name"
        value={blueprintName}
        onChange={(e) => setBlueprintName(e.target.value)}
      />

      <button onClick={createBlueprint} style={{ marginLeft: "10px" }}>
        Save Blueprint
      </button>

      <hr />

      <h3>Add Fields</h3>

      <select
        value={fieldType}
        onChange={(e) => setFieldType(e.target.value as FieldType)}
      >
        <option>Text</option>
        <option>Date</option>
        <option>Checkbox</option>
      </select>

      <button onClick={addField} style={{ marginLeft: "10px" }}>
        Add Field
      </button>

      <ul>
        {fields.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <hr />

      <h3>Saved Blueprints</h3>
      <ul>
        {blueprints.map((bp, i) => (
          <li key={i}>
            <strong>{bp.name}</strong>
            <ul>
              {bp.fields.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blueprints;

<button style={{ marginTop: "10px" }}>
  Create Contract
</button>
>>>>>>> caef0008aecd9017741cad0c32af306d9e27b3fb
