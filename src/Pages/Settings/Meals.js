import MealIngTable from "../../Components/Inputs/Customs/MealIngTable";
import {
  CUSTOM,
  IMAGE,
  NUMBER,
  SELECT,
  STRING,
} from "../../Components/Inputs/inputTypes";
import { MEAL } from "../../Components/ListItems/listItemTypes";
import { LIST } from "../Types";

export default {
  path: "/settings/meals",
  type: LIST,
  back: {
    to: "/settings",
    title: "Созламалар",
  },
  title: "Таомлар",
  formTitle: "таом",
  url: "/meals",
  redux: "meals",
  local: "meals",
  listItem: MEAL,
  form: [
    {
      name: "name",
      placeholder: "Nomi",
      type: STRING,
    },
    {
      name: "price",
      placeholder: "Нархи",
      type: NUMBER,
    },
    {
      name: "category_id",
      placeholder: "Категорияси",
      type: SELECT,
      options: {
        type: "categories",
      },
    },
    {
      name: "img",
      // placeholder: "Нархи",
      type: IMAGE,
    },
    {
      // placeholder: "Нархи",
      type: CUSTOM,
      component: <MealIngTable name="ingredients" redux="meals"></MealIngTable>,
    },
  ],
};
