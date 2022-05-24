import { Avatar, List, Typography } from "antd";
import React from "react";
import ItemActions from "./ItemActions";

const ClientItem = ({ item, page }) => {
  return (
    <List.Item key={item.id}>
      <List.Item.Meta
        // avatar={<Avatar size={"large"} />}
        title={<Typography style={{ color: "teal" }}>{item.name}</Typography>}
        description={<>{item.telefon}</>}
      />
      <ItemActions page={page} item={item}></ItemActions>
    </List.Item>
  );
};

export default ClientItem;
