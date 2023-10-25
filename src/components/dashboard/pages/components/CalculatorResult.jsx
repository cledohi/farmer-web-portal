import React from "react";
import Button from "react-bootstrap/Button";
import Loading from "../../../common/Loading";
import { useSelector } from "react-redux";
function CalculatorResult() {
  const {
    order: { loading, calculator },
  } = useSelector((state) => state.app);
  const {
    amountToPayForFertilizer: fertP,
    amountToPayForSeed: seedP,
    area,
    fertilizerQuantity: fertQ,
    seedQuantity: seedQ,
    totalPayment: totalP,
  } = calculator;
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title card-title-custom-sm ">
          Calculator Results
        </div>
        <div className="">
          Seed Quantity: <strong>{seedQ} Kg </strong>
        </div>
        <div className="">
          Fertilizer Quantity: <strong>{fertQ} Kg</strong>
        </div>
        <div className="">
          Land Area: <strong>{area} m2</strong>
        </div>
        <div className="">
          Seed Payment: <strong>{seedP} Frw</strong>
        </div>
        <div className="">
          Fertilizer Payment: <strong>{fertP} Frw</strong>
        </div>
        <div className="">
          Tatal Payment: <strong>{totalP} Frw</strong>
        </div>
        <Button type="submit" className="btn btn-secondary">
          {loading ? <Loading /> : <span>Submit Fertilizer Order</span>}
        </Button>
      </div>
    </div>
  );
}

export default CalculatorResult;
