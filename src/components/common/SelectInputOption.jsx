import React from "react";
import Form from "react-bootstrap/Form";

function SelectInputOption({ label, values = [] }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={label}>{label}</Form.Label>
      <Form.Select id={label}>
        <option value={0}> choose {label}</option>
        {values.map((item, index) => (
          <option key={item.fertilizerId} value={item.fertilizerId}>
            {`${item.fertilizerName} ${item.unity}kg to ${item.price} Frw`}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectInputOption;
