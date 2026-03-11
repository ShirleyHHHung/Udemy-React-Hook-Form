import {
  FormProvider,
  useForm,
  type FieldErrors,
  type UseFormReturn,
} from "react-hook-form";
import CheckoutForm from "./conponent/CheckoutForm";
import DeliveryAddressForm from "./conponent/DeliveryAddressForm";
import FoodDeliverMaster from "./conponent/FoodDeliverMaster";
import { type FoodDeliveryFormType } from "../../types/index";

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

  const { handleSubmit } = methed;

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
      <FormProvider {...methed}>
        <FoodDeliverMaster />
        <div>list of ordered food items</div>
        <CheckoutForm />
        <DeliveryAddressForm />
      </FormProvider>

      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
