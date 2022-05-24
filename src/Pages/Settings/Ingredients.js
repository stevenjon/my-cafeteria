import { SELECT, STRING } from "../../Components/Inputs/inputTypes";
import { CAT } from "../../Components/ListItems/listItemTypes";
import { LIST } from "../Types";

export default {
  path: "/settings/ingredients",
  type: LIST,
  back: {
    to: "/settings",
    title: "Созламалар",
  },
  title: "Махсулотлар",
  formTitle: "махсулот",
  url: "/ingredients",
  redux: "ingredients",
  local: "ingredients",
  listItem: CAT,
  modalY: "10vh",
  form: [
    {
      name: "name",
      placeholder: "Nomi",
      type: STRING,
    },
    {
      name: "purchase_type",
      placeholder: "Харид тури",
      options: {
        type: "CUSTOM",
        data: [
          {
            _id: 1,
            name: "Килоли",
          },
          {
            _id: 2,
            name: "Донабай",
          },
        ],
      },
      type: SELECT,
    },
  ],
};
