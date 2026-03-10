import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import TextField from "./controls/TextField";

type FoodDeliveryFormType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

const FoodDeliveryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      mobile: "",
      email: "",
    },
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log("formData", formData);
  };

  const onError = (err: FieldErrors) => {
    console.log("err", err);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
    >
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <TextField label="#order No." disabled {...register("orderNo")} />
          </div>
        </div>
        <div className="col">
          <TextField
            label="Mobile"
            {...register("mobile", {
              required: "此欄位必填",
            })}
            error={errors.mobile}
          />
          {/* {errors.mobile?.message &&
              Object.values(errors.mobile?.types as Record<string, string>).map(
                (item, index) => (
                  <div key={index} className="error-feedback">
                    {item}
                  </div>
                ),
              )} */}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <TextField
            label="Customer Name"
            {...register("customerName", {
              required: "此欄位必填",
            })}
            error={errors.customerName}
          />
        </div>
        <div className="col">
          <TextField
            type="email"
            label="Email"
            {...register("email", {
              pattern: {
                value: /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})/,
                message: "email 格式錯誤",
              },
            })}
            error={errors.email}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
