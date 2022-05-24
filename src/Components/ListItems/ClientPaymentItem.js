import { List, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import ItemActions from "./ItemActions";

const ClientPaymentItem = ({ item, page }) => {
  const clients = useSelector(state => state.app.allData["clients"] || []);
  return (
    <List.Item key={item.id}>
      <List.Item.Meta
        // avatar={<Avatar size={"large"} />}
        title={
          <Typography style={{ color: "teal" }}>
            {clients.find(cl => cl._id === item.client_id)?.name}
          </Typography>
        }
        description={<>{item.summa}</>}
      />
      <ItemActions page={page} item={item}></ItemActions>
    </List.Item>
  );
};

export default ClientPaymentItem;
