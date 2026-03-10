import { useState, type ChangeEvent, type SyntheticEvent } from "react";
import {
  FormProvider,
  useForm,
  type FieldErrors,
  type UseFormReturn,
} from "react-hook-form";
import TextField from "./controls/TextField";
import CheckoutForm from "./CheckoutForm";
import { type FoodDeliveryFormType } from "./types/index";

const FoodDeliveryForm = () => {
  const methed: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
      defaultValues: {
        orderNo: new Date().valueOf(),
        customerName: "",
        mobile: "",
        email: "",
        paymentMethod: "",
        deliveryIn: 0,
        address: {
          streetAddress: "",
          landmark: "",
          city: "",
          state: "",
        },
      },
      mode: "onChange",
      criteriaMode: "all",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methed;

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
      <div>list of ordered food items</div>
      <FormProvider {...methed}>
        <CheckoutForm />
      </FormProvider>
      <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Street Address"
            {...register("address.streetAddress", {
              required: "此欄位必填",
            })}
            error={errors.address?.streetAddress}
          />
        </div>
        <div className="col">
          <TextField
            label="City"
            {...register("address.city", {
              required: "此欄位必填",
            })}
            error={errors.address?.city}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Landmark"
            {...register("address.landmark")}
            error={errors.address?.landmark}
          />
        </div>
        <div className="col">
          <TextField
            label="State"
            {...register("address.state")}
            error={errors.address?.state}
          />
        </div>
      </div>
      <div>check out details</div>
      <div>delivery address</div>

      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
