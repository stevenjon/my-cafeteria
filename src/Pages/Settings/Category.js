import { STRING } from "../../Components/Inputs/inputTypes";
import { CAT } from "../../Components/ListItems/listItemTypes";
import { LIST } from "../Types";

export default {
  path: "/settings/category",
  type: LIST,
  back: {
    to: "/settings",
    title: "Созламалар",
  },
  title: "Категориялар",
  formTitle: "категория",
  modalY: "20vh",
  url: "/categories",
  redux: "categories",
  local: "categories",
  listItem: CAT,
  form: [
    {
      name: "name",
      placeholder: "Nomi",
      type: STRING,
    },
  ],
};
