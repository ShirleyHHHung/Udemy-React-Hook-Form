export type selectOptionType = { value: string | number; text: string };

export type CheckoutFormType = {
  paymentMethod: string;
  deliveryIn: number;
};

export type DeliveryAddressFormType = {
  streetAddress: string;
  landmark: string;
  city: string;
  state: string;
};

export type FoodDeliverMasterType = {
  orderNo: number;
  customerName: string;
  mobile: string;
  email: string;
};

export type FoodDeliveryFormType = {
  address: DeliveryAddressFormType;
} & CheckoutFormType &
  FoodDeliverMasterType;
