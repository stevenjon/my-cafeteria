import { Avatar, List, Typography } from "antd";
import React from "react";
import NumberFormat from "../../utils/NumberFormat";
import ItemActions from "./ItemActions";

const MealItem = ({ item, page }) => {
  return (
    <List.Item key={item.id}>
      <List.Item.Meta
        avatar={<Avatar size={"large"} src={item.img} />}
        title={<Typography style={{ color: "teal" }}>{item.name}</Typography>}
        description={<>{NumberFormat(item.price)} so'm</>}
      />
      <ItemActions page={page} item={item}></ItemActions>
    </List.Item>
  );
};

export default MealItem;
