import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useForm } from "react-hook-form";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

const TypicalForm = () => {
  console.log("useForm", useForm());
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

  const onSubmit = (formData: FoodDeliveryFormType) => {
    // e.preventDefault();
    console.log("formData", formData);
  };

  const onError = (errors) => {
    console.log("formData is validation errors", errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} autoComplete="off">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
          {...register("customerName", {
            required: "Customer name is required",
          })}
        />
        <label>Customer Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Mobile"
          {...register("mobile", {
            required: "Mobile is required",
          })}
        />
        <label>Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default TypicalForm;
