import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useForm } from "react-hook-form";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

const FoodDeliveryForm = () => {
  const { register } = useForm();
  return (
    <form autoComplete="off">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
          {...register("customerName")}
        />
        <label>Customer Name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" placeholder="Mobile" />
        <label>Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
