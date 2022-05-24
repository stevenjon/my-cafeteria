import { List, Typography } from "antd";
import React from "react";
import NumberFormat from "../../utils/NumberFormat";
import ItemActions from "./ItemActions";
import moment from "moment";
const DoneOrder = ({ item, page }) => {
  return (
    <List.Item key={item.id}>
      <List.Item.Meta
        // avatar={<Avatar size={"large"} />}
        title={
          <Typography style={{ color: "teal" }}>
            № {item.order} ||{" "}
            {moment(item.createdAt).format("DD.MM.YYYY HH:mm")}
          </Typography>
        }
        description={<>Summa: {NumberFormat(item.total_price)} so'm</>}
      />
      <ItemActions type="order" page={page} item={item}></ItemActions>
    </List.Item>
  );
};

export default DoneOrder;
