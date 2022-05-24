import OrderForm from "../Components/Inputs/Customs/OrderForm";
import { CUSTOM } from "../Components/Inputs/inputTypes";
import { CAT } from "../Components/ListItems/listItemTypes";
import { ORDER } from "./Types";

export default {
  path: "/orders/single",
  type: ORDER,
  back: {
    to: "/orders",
    title: "Заказлар",
  },
  title: "Янги заказ",
  formTitle: "таом танланг",
  url: "/orders/single",
  redux: "single_order",
  listItem: CAT,
  form: [
    {
      type: CUSTOM,
      component: <OrderForm></OrderForm>,
    },
  ],
};
