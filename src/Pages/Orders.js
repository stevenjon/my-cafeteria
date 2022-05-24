import { STRING } from "../Components/Inputs/inputTypes";
import { DONE_ORDER } from "../Components/ListItems/listItemTypes";
import { LIST } from "./Types";

export default {
  path: "/orders",
  type: LIST,
  back: {
    to: "/",
    title: "Уй",
  },
  title: "Заказлар",
  formTitle: "заказ",
  url: "/orders",
  redux: "orders",
  listItem: DONE_ORDER,
  form: [
    {
      name: "name",
      placeholder: "Nomi",
      type: STRING,
    },
  ],
};
