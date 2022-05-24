import { STRING } from "../Components/Inputs/inputTypes";
import { CLIENT } from "../Components/ListItems/listItemTypes";
import { LIST } from "./Types";

export default {
  path: "/clients",
  type: LIST,
  back: {
    to: "/",
    title: "Уй",
  },
  title: "Клиентлар",
  formTitle: "клиент",
  modalY: "10vh",
  url: "/clients",
  redux: "clients",
  local: "clients",
  listItem: CLIENT,
  form: [
    {
      name: "name",
      placeholder: "Nomi",
      type: STRING,
    },
    {
      name: "telefon",
      placeholder: "Телефон",
      type: STRING,
    },
    {
      name: "izoh",
      placeholder: "Қушимча",
      type: STRING,
    },
  ],
};
