import React from "react";
import Form from "react-bootstrap/Form";

function SelectInputOption({ label, values = [] }) {
  console.log(values);
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={label}>{label}</Form.Label>
      <Form.Select id={label} controlId={label}>
        <option value={0}> choose {label}</option>
        {values.map((item, index) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectInputOption;
