import { CAT } from "../../Components/ListItems/listItemTypes";
import NumberFormat from "../../utils/NumberFormat";
import { LIST } from "../Types";

export default {
  path: "/reports/kassa",
  type: LIST,
  back: {
    to: "/reports",
    title: "Хисобот",
  },
  title: "Касса қолдиғи",
  formTitle: "категория",
  modalY: "70vh",
  url: "/ingredient-quantity",
  redux: "kassa",
  listItem: CAT,
  reportColumns: [
    {
      title: "Қолдиқ",
      dataIndex: "total",
      key: "name",
      render: text => {
        if (text < 0) {
          return (
            <span style={{ color: "var(--danger)" }}>
              {" "}
              {NumberFormat(text)} so'm
            </span>
          );
        } else {
          return (
            <span style={{ color: "mediumseagreen" }}>
              {NumberFormat(text)} so'm
            </span>
          );
        }
      },
    },
  ],
};
