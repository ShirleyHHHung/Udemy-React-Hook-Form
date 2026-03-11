import { useFormContext } from "react-hook-form";
import { type selectOptionType } from "../../../types";
import { type CheckoutFormType } from "../../../types/index";
import Select from "../../../controls/Select";

const paymentOptions: selectOptionType[] = [
  { value: "", text: "select" },
  { value: "online", text: "Paid Online" },
  { value: "COD", text: "Cash on Delivery" },
];

const deliveryInOptions: selectOptionType[] = [
  { value: 0, text: "select" },
  { value: 30, text: "Half an Hour" },
  { value: 60, text: "1 Hour" },
  { value: 120, text: "2 Hour" },
  { value: 180, text: "3 Hour" },
];

const CheckoutForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormType>();

  return (
    <>
      <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
      <div className="row mb-2">
        <div className="col">
          <Select
            lebel="Payment Method"
            {...register("paymentMethod", { required: "此欄位必填" })}
            options={paymentOptions}
            error={errors.paymentMethod}
          />
        </div>
        <div className="col">
          <Select
            lebel="Delivery Within"
            {...register("deliveryIn")}
            options={deliveryInOptions}
            error={errors.deliveryIn}
          />
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
