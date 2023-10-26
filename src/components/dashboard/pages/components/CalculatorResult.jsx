import React from "react";
import Button from "react-bootstrap/Button";
import Loading from "../../../common/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsCal,
  submitFertilizerOrder,
} from "../../../../redux/actions/CalculatorAction";

function CalculatorResult() {
  const dispatch = useDispatch();
  const {
    order: { loading, calculator, orderRequest },
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
    <>
      <ul className="list-group">
        <li
          className="list-group-item active card-title card-title-custom-sm "
          aria-current="true"
        >
          Calculator Results
        </li>
        <li className="list-group-item  d-flex justify-content-between">
          <span className="list_Item_text">Seed .Quantity</span>
          <strong className="float-right mr-4">{seedQ} Kg </strong>
        </li>
        <li className="list-group-item  d-flex justify-content-between">
          <span className="list_Item_text">Fertilizer .Q</span>
          <strong className="float-right mr-1">{fertQ} Kg</strong>
        </li>
        <li className="list-group-item  d-flex justify-content-between">
          <span className="list_Item_text">Land Area</span>{" "}
          <strong className="float-right mr-1">{area} m2</strong>
        </li>
        <li className="list-group-item  d-flex justify-content-between">
          <span className="list_Item_text">Seed .P</span>
          <strong className="float-right mr-1">{seedP} Frw</strong>
        </li>
        <li className="list-group-item  d-flex justify-content-between">
          <span className="list_Item_text">Fertilizer .P</span>
          <strong className="float-right mr-1">{fertP} Frw</strong>
        </li>
        <li className="list-group-item  d-flex justify-content-between">
          <span className="list_Item_text">Tatal .Payment</span>
          <strong className="float-right mr-1">{totalP} Frw</strong>
        </li>
      </ul>
      <div className="d-flex justify-content-between mt-3">
        <Button
          type="submit"
          className="btn btn-secondary"
          onClick={() => dispatch(submitFertilizerOrder(orderRequest))}
        >
          {loading ? <Loading /> : <span>Submit Order</span>}
        </Button>
        <Button
          type="submit"
          className="btn btn-dark"
          onClick={() => {
            dispatch(setIsCal(false));
          }}
        >
          back
        </Button>
      </div>
    </>
  );
}

export default CalculatorResult;
