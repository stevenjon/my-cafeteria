import { Avatar, List, Typography } from "antd";
import React from "react";
import ItemActions from "./ItemActions";

const CategoryItem = ({ item, page }) => {
  return (
    <List.Item key={item.id}>
      <List.Item.Meta
        avatar={<Avatar size={"large"} />}
        title={<Typography style={{ color: "teal" }}>{item.name}</Typography>}
        description={<>12 000 so'm</>}
      />
      <ItemActions page={page} item={item}></ItemActions>
    </List.Item>
  );
};

export default CategoryItem;
