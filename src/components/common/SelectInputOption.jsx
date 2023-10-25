import React from "react";
import Form from "react-bootstrap/Form";

function SelectInputOption({ label, values = [] }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={label}>{label}</Form.Label>
      <Form.Select id={label}>
        <option value={0}> choose {label}</option>
        {values.map((item, index) => {
          switch (label) {
            case "Fertilizer":
              return (
                <option key={item.fertilizerId} value={item.fertilizerId}>
                  {`${item.fertilizerName} ${item.unity}kg to ${item.price} Frw`}
                </option>
              );
            case "Seeds":
              return (
                <option key={item.seedId} value={item.seedId}>
                  {`${item.seedName} ${item.unity}kg to ${item.unityPrice} Frw`}
                </option>
              );
            default:
              return (
                <option key={item?.id} value={item?.id}>
                  {`${item?.farmer?.firstname}'s Land Found ${item?.landLocation} area ${item?.landArea} m2`}
                </option>
              );
          }
        })}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectInputOption;
