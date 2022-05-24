import { CAT } from "../../Components/ListItems/listItemTypes";
import NumberFormat from "../../utils/NumberFormat";
import { LIST } from "../Types";

export default {
  path: "/reports/client-debts",
  type: LIST,
  back: {
    to: "/reports",
    title: "Хисобот",
  },
  title: "Клиент қарздорлик",
  formTitle: "категория",
  modalY: "70vh",
  url: "/ingredient-quantity",
  redux: "client_debts",
  listItem: CAT,
  reportColumns: [
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
    },
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
