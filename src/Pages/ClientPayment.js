import { NUMBER, SELECT } from "../Components/Inputs/inputTypes";
import { CLIENT_PAYMENT } from "../Components/ListItems/listItemTypes";
import { LIST } from "./Types";

export default {
  path: "/client-payments",
  type: LIST,
  back: {
    to: "/",
    title: "Уй",
  },
  title: "Клиент тўловлари",
  formTitle: "клиент тўлови",
  modalY: "10vh",
  url: "/client-payments",
  redux: "client_payments",
  listItem: CLIENT_PAYMENT,
  form: [
    {
      name: "client_id",
      placeholder: "Клиент",
      options: {
        type: "clients",
      },
      type: SELECT,
    },
    {
      name: "summa",
      placeholder: "Сумма",
      type: NUMBER,
    },
  ],
};
