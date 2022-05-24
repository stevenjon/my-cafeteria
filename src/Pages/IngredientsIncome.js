import IngredientIncomeTable from "../Components/Inputs/Customs/IngredientIncomeTable";
import { CUSTOM } from "../Components/Inputs/inputTypes";
import { DONE_ORDER } from "../Components/ListItems/listItemTypes";
import { LIST } from "./Types";

export default {
  path: "/ingredients_income",
  type: LIST,
  back: {
    to: "/",
    title: "Уй",
  },
  title: "Махсулот кирими",
  formTitle: "кирим",
  url: "/ingredients_income",
  redux: "ingredients_income",
  listItem: DONE_ORDER,
  modalY: "30vh",
  form: [
    {
      // placeholder: "Нархи",
      type: CUSTOM,
      component: (
        <IngredientIncomeTable
          name="ingredients"
          redux="ingredients_income"
        ></IngredientIncomeTable>
      ),
    },
  ],
};
