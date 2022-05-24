import { CAT } from "../../Components/ListItems/listItemTypes";
import { LIST } from "../Types";

export default {
  path: "/reports/ingredient-quantity",
  type: LIST,
  back: {
    to: "/reports",
    title: "Хисобот",
  },
  title: "Махсулот қолдиғи",
  formTitle: "категория",
  modalY: "70vh",
  url: "/ingredient-quantity",
  redux: "ingredient_quantity",
  listItem: CAT,
  reportColumns: [
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Killo",
      dataIndex: "killo",
      key: "age",
    },
    {
      title: "Dona",
      dataIndex: "count",
      key: "address",
    },
  ],
};
